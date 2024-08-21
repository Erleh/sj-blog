package com.spicejack.sj.configurations.customizers;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Component;

import java.util.logging.Logger;

@Component
public class CustomLogoutHandler implements LogoutHandler {
    private final Logger logger = Logger.getLogger(CustomLogoutHandler.class.toString());

    @Override
    public void logout(
            HttpServletRequest req,
            HttpServletResponse res,
            Authentication authentication
    ) {
        // Invalidate refresh token here
        //
        //
        

        // Clear Http-only cookies
        Cookie accessTokenCookie = new Cookie("ACCESS_TOKEN", null);
        accessTokenCookie.setPath("/");
        accessTokenCookie.setHttpOnly(true);
        accessTokenCookie.setMaxAge(0);

        res.addCookie(accessTokenCookie);

        Cookie refreshTokenCookie = new Cookie("REFRESH_TOKEN", null);
        refreshTokenCookie.setPath("/");
        refreshTokenCookie.setHttpOnly(true);
        refreshTokenCookie.setMaxAge(0);

        res.addCookie(refreshTokenCookie);
    }
}
