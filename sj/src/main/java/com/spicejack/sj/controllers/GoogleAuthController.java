package com.spicejack.sj.controllers;

import com.spicejack.sj.general.dto.GoogleTokenExchangeDto;
import com.spicejack.sj.services.GoogleAuthService;
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

    @PostMapping("/google_token_exchange")
    public GoogleTokenExchangeDto exchangeForTokens(
            @RequestBody String authCode
    ) {
        GoogleTokenExchangeDto info = this.googleAuthService.getGoogleTokenExchangeDto(authCode);

        logger.info("---Google Auth code performed---");
        logger.info(info.toString());

        return info;
    }
}
