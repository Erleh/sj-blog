package com.spicejack.sj.controllers;

import com.spicejack.sj.general.dto.GoogleTokenExchangeDto;
import com.spicejack.sj.general.dto.GoogleTokenInfoDto;
import com.spicejack.sj.services.GoogleAuthService;
import com.spicejack.sj.services.UserService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class GoogleAuthController {
    @Value("${backend.root.url}")
    private String backendRootUrl;
    private final GoogleAuthService googleAuthService;
    private final UserService userService;

    public GoogleAuthController(
            GoogleAuthService googleAuthService,
            UserService userService
    ) {
        this.googleAuthService = googleAuthService;
        this.userService = userService;
    }

    // Exchange google auth code for access and refresh tokens
    @PostMapping("/public/google_token_exchange")
    public ResponseEntity<GoogleTokenExchangeDto> exchangeForTokens(
            HttpServletResponse response,
            @RequestBody String authCode
    ) {
        GoogleTokenExchangeDto info = this.googleAuthService.getGoogleTokenExchangeDto(authCode);

        Cookie accessToken = new Cookie("ACCESS_TOKEN", info.getAccess_token());
        accessToken.setMaxAge(info.getExpires_in());
        accessToken.setHttpOnly(true);
        accessToken.setPath("/");
        accessToken.setSecure(true);
        accessToken.setDomain(this.backendRootUrl);

        Cookie refreshToken = new Cookie("REFRESH_TOKEN", info.getRefresh_token());
        refreshToken.setHttpOnly(true);
        refreshToken.setPath("/");
        refreshToken.setSecure(true);
        refreshToken.setDomain(this.backendRootUrl);

        Cookie iss = new Cookie("iss", "google.com");
        refreshToken.setHttpOnly(true);
        iss.setPath("/");
        iss.setSecure(true);
        iss.setDomain(this.backendRootUrl);

        response.addCookie(accessToken);
        response.addCookie(refreshToken);
        response.addCookie(iss);

        return new ResponseEntity<>(info ,HttpStatus.OK);
    }

    // Used to check if user authenticating through google exists in this application's database
    @GetMapping("/public/google_does_user_exist")
    public boolean doesUserExist(
            @CookieValue("ACCESS_TOKEN") String accessToken
    ) {
        if (accessToken == null) {
            return false;
        }

        // Retrieve google user information here
        GoogleTokenInfoDto tokenInfo = googleAuthService.getGoogleTokenInfo(accessToken);

        // Return result from checking database for user
        return userService.checkIfUserExistsByEmail(tokenInfo.getEmail());
    }

    @PostMapping("/public/google_create_user")
    public void createAccount(
            @CookieValue("ACCESS_TOKEN") String accessToken,
            @RequestBody String username
    ) {
        if (accessToken == null) {
            return;
        }

        // Retrieve google user information here
        GoogleTokenInfoDto tokenInfo = googleAuthService.getGoogleTokenInfo(accessToken);

        // Create account
        userService.createUser(username, tokenInfo.getEmail(), true);
    }
}
