package com.spicejack.sj.controllers;

import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RefreshTokenController {

    @GetMapping("/public/refresh-token")
    void refreshAccessToken(
            @CookieValue("iss") String iss,
            @CookieValue("REFRESH_TOKEN") String refreshToken
    ) {
        // test for token issuer
        if (iss.compareTo("google.com") == 0) {

        }
        // request access token from the corresponding issuer
        
        // return response
    }
}
