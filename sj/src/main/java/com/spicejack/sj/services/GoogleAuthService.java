package com.spicejack.sj.services;

import com.spicejack.sj.general.dto.GoogleTokenExchangeDto;
import com.spicejack.sj.proxies.GoogleAuthApisProxy;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class GoogleAuthService {
    private final GoogleAuthApisProxy googleAuthApisProxy;

    @Value("${spring.security.oauth2.client.registration.google.client-id}")
    String client_id;
    @Value("${spring.security.oauth2.client.registration.google.client-secret}")
    String client_secret;
    @Value("${google.redirect.uri}")
    String redirect_uri;

    public GoogleAuthService(
            GoogleAuthApisProxy googleAuthApisProxy
    ) {
        this.googleAuthApisProxy = googleAuthApisProxy;
    }

    public GoogleTokenExchangeDto getGoogleTokenExchangeDto(String authCode) {
        // Possible error of this request is "invalid_grant" where the supplied
        // authorization code is invalid or in the wrong format
        return googleAuthApisProxy.getTokens(
                this.client_id,
                this.client_secret,
                authCode,
                "authorization_code",
                this.redirect_uri
        );
    }
}