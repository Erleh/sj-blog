package com.spicejack.sj.controllers;

import com.spicejack.sj.general.dto.GoogleTokenExchangeDto;
import com.spicejack.sj.services.GoogleAuthService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
public class GoogleAuthController {
    private final Logger logger = Logger.getLogger(GoogleAuthController.class.toString());
    private final GoogleAuthService googleAuthService;
    public GoogleAuthController(
            GoogleAuthService googleAuthService
    ) {
        this.googleAuthService = googleAuthService;
    }

    @PostMapping("/public/google_token_exchange")
    public ResponseEntity<GoogleTokenExchangeDto> exchangeForTokens(
            HttpServletResponse response,
            @RequestBody String authCode
    ) {
        GoogleTokenExchangeDto info = this.googleAuthService.getGoogleTokenExchangeDto(authCode);

        // to do:
        //
        //  Set secure flag on cookies to enforce https connection
        //
        Cookie accessToken = new Cookie("ACCESS_TOKEN", info.getAccess_token());
        accessToken.setMaxAge(info.getExpires_in());
        accessToken.setHttpOnly(true);

        Cookie refreshToken = new Cookie("REFRESH_TOKEN", info.getRefresh_token());
        refreshToken.setHttpOnly(true);

        response.addCookie(accessToken);
        response.addCookie(refreshToken);

        return new ResponseEntity<>(info ,HttpStatus.OK);
    }
}
