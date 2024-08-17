package com.spicejack.sj.configurations;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.server.resource.web.BearerTokenResolver;


@Configuration
public class CookieBearerTokenResolver implements BearerTokenResolver {
    private static final String ACCESS_TOKEN_COOKIE_NAME = "ACCESS_TOKEN";

    // Set to find access tokens stored as httpOnly cookie rather than as
    // 'Authorization' headers
    @Override
    public String resolve(HttpServletRequest req) {
        if (req.getCookies() != null) {
            for (Cookie cookie : req.getCookies()) {
                if (ACCESS_TOKEN_COOKIE_NAME.equals(cookie.getName())) {
                    return cookie.getValue();
                }
            }
        }

        // If not found
        return null;
    }
}
