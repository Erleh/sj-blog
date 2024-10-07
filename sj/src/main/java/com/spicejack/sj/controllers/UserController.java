package com.spicejack.sj.controllers;

import com.spicejack.sj.services.UserService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.server.resource.introspection.OAuth2IntrospectionAuthenticatedPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class UserController {
    private final UserService userService;

    public UserController(
            UserService userService
    ) {
        this.userService = userService;
    }

    @GetMapping("/api/login")
    void login(
        HttpServletResponse response,
        @CookieValue("REFRESH_TOKEN") String refreshToken,
        @CookieValue("iss") String iss,
        @AuthenticationPrincipal OAuth2IntrospectionAuthenticatedPrincipal principal
    ) {
        String userEmail = principal.getName();
        long userId = userService.getUserIdByEmail(userEmail);

        // Save refresh token
        userService.saveRefreshToken(userId, refreshToken, true, iss);
    }

    @PostMapping("/public/does_username_exist")
    boolean doesUsernameExist(
            @RequestBody String username
    ) {
        return userService.checkIfUserExistsByUsername(username);
    }

    @GetMapping("/public/has_principal")
    boolean isLoggedIn(
            @AuthenticationPrincipal OAuth2IntrospectionAuthenticatedPrincipal principal
    ) {
        return principal != null;
    }

    @GetMapping("/api/is_admin")
    boolean isUserAdmin(
            @AuthenticationPrincipal OAuth2IntrospectionAuthenticatedPrincipal principal
            ) {
        // Authorities of OAuth2IntrospectionAuthenticatedPrincipal should be of
        // Collection<GrantedAuthority> type
        Collection<GrantedAuthority> authorities = (Collection<GrantedAuthority>) principal.getAuthorities();

        for (GrantedAuthority role: authorities) {
            if (role.getAuthority().compareTo("ROLE_ADMIN") == 0) {
                return true;
            }
        }

        return false;
    }
}
