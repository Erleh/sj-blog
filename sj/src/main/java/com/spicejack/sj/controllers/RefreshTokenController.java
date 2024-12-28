package com.spicejack.sj.controllers;

import com.spicejack.sj.general.dto.GoogleTokenExchangeDto;
import com.spicejack.sj.services.GoogleAuthService;
import com.spicejack.sj.services.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.server.resource.introspection.OAuth2IntrospectionAuthenticatedPrincipal;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RefreshTokenController {
    @Value("${backend.root.url}")
    private String backendRootUrl;
    private final GoogleAuthService googleAuthService;
    private final UserService userService;

    public RefreshTokenController(
            GoogleAuthService googleAuthService,
            UserService userService
    ) {
        this.googleAuthService = googleAuthService;
        this.userService = userService;
    }

    @GetMapping("/api/save_refresh_token")
    void saveRefreshToken(
            @CookieValue("iss") String iss,
            @CookieValue("REFRESH_TOKEN") String refreshToken,
            @AuthenticationPrincipal OAuth2IntrospectionAuthenticatedPrincipal principal
    ) {
        long userId = this.userService.getUserIdByEmail(principal.getName());

        // Saves refresh token to database
        this.userService.saveRefreshToken(userId, refreshToken, true, iss);
    }

    @GetMapping("/public/refresh_access")
    ResponseEntity<GoogleTokenExchangeDto> refreshAccessToken(
            @CookieValue("iss") String iss,
            @CookieValue("REFRESH_TOKEN") String refreshToken,
            HttpServletResponse response
    ) {
        // Check if refresh token is still valid
        if (!userService.checkForRefreshToken(refreshToken)) {
            return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
        }

        // test for token issuer
        if (iss.compareTo("google.com") == 0) {
            GoogleTokenExchangeDto refreshResponse = null;
            // request access token from the corresponding issuer
            refreshResponse = this.googleAuthService.refreshAccessToken(refreshToken);

            Cookie accessToken = new Cookie("ACCESS_TOKEN", refreshResponse.getAccess_token());
            accessToken.setMaxAge(refreshResponse.getExpires_in());
            accessToken.setHttpOnly(true);
            accessToken.setPath("/");
            accessToken.setSecure(true);
            accessToken.setDomain(this.backendRootUrl);

            response.addCookie(accessToken);

            // Successful response
            return new ResponseEntity<>(refreshResponse, HttpStatus.OK);
        }

        // Fail response
        return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
    }
}
