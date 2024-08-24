package com.spicejack.sj.configurations.customizers;

import com.spicejack.sj.services.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Component;

@Component
public class CustomLogoutHandler implements LogoutHandler {
    private final UserService userService;

    public CustomLogoutHandler(
            UserService userService
    ) {
        this.userService = userService;
    }

    @Override
    public void logout(
            HttpServletRequest req,
            HttpServletResponse res,
            Authentication authentication
    ) {
        // Find original cookies from the given request
        Cookie[] cookies = req.getCookies();
        if (cookies != null) {
            String refreshToken = "";
            String iss = "";

            for (Cookie cookie: cookies) {
                // Retrieve original refresh_token
                if ("REFRESH_TOKEN".equals(cookie.getName())) {
                    refreshToken = cookie.getValue();
                }

                // Retrieve iss
                if ("iss".equals(cookie.getName())) {
                    iss = cookie.getValue();
                }
            }

            // Revoke/invalidate refresh token
            if (!refreshToken.isEmpty() && !iss.isEmpty()) {
                userService.revokeRefreshToken(refreshToken, iss);
            }
        }

        // Clear Http-only cookies by replacing original cookies of the same name
        //
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

        Cookie issCookie = new Cookie("iss", null);
        issCookie.setPath("/");
        issCookie.setHttpOnly(true);
        issCookie.setMaxAge(0);

        res.addCookie(issCookie);
    }
}
