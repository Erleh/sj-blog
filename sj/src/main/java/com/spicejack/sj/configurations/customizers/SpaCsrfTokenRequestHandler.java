package com.spicejack.sj.configurations.customizers;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.CsrfTokenRequestAttributeHandler;
import org.springframework.security.web.csrf.CsrfTokenRequestHandler;
import org.springframework.security.web.csrf.XorCsrfTokenRequestAttributeHandler;
import org.springframework.util.StringUtils;

import java.util.function.Supplier;

public class SpaCsrfTokenRequestHandler extends CsrfTokenRequestAttributeHandler {
    private final CsrfTokenRequestHandler delegate = new XorCsrfTokenRequestAttributeHandler();

    @Override
    public void handle(
            HttpServletRequest request,
            HttpServletResponse response,
            Supplier<CsrfToken> csrfToken
    ) {
        /*
         * XorCsrfTokenRequestAttributeHandler is used to provide BREACH protection of
         * the CsrfToken when it is rendered in the response body.
         * This protection is done by changing the CsrfToken on every request,
         * when the token is later resolved as a header value or request param,
         * it is decoded to obtain the raw token and compared to the persisted CsrfToken
         */
        this.delegate.handle(request, response, csrfToken);
    }

    // Extra note:
    // This will be a spa, meaning the secondary return case will likely not be hit
    // as we are not providing server-side rendering, thus not including the _csrf
    // request parameter
    @Override
    public String resolveCsrfTokenValue(
            HttpServletRequest request,
            CsrfToken csrfToken
    ){
        /*
         * If the request contains a request header, user CsrfTokenRequestAttributeHandler
         * to resolve the CsrfToken. This applies when a single-page application includes
         * the header value automatically, which was obtained via a cookie containing the
         * raw CsrfToken
         *
         */
        if (StringUtils.hasText(request.getHeader(csrfToken.getHeaderName()))) {
            return super.resolveCsrfTokenValue(request, csrfToken);
        }

        /*
         * For all other cases (e.g. if the request contains a request parameter), use
         * XorCsrfTokenRequestAttributeHandler to resolve the CsrfToken. This applies
         * when a server-side rendered form includes the _csrf request parameter as
         * a hidden input
         */
        return this.delegate.resolveCsrfTokenValue(request, csrfToken);
    }
}
