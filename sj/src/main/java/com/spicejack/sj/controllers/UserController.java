package com.spicejack.sj.controllers;

import com.spicejack.sj.services.UserService;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.server.resource.introspection.OAuth2IntrospectionAuthenticatedPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/public/does_username_exist")
    boolean doesUsernameExist(
            @RequestBody String username
    ) {
        return userService.checkIfUserExistsByUsername(username);
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
