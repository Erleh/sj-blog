package com.spicejack.sj.configurations.customizers;

import com.spicejack.sj.general.dto.GoogleTokenInfoDto;
import com.spicejack.sj.services.GoogleAuthService;
import com.spicejack.sj.services.UserService;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.server.resource.introspection.OAuth2IntrospectionAuthenticatedPrincipal;
import org.springframework.security.oauth2.server.resource.introspection.OpaqueTokenIntrospector;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.logging.Logger;

@Component
public class GoogleOpaqueTokenIntrospector implements OpaqueTokenIntrospector {
    private final GoogleAuthService googleAuthService;
    private final UserService userService;

    public GoogleOpaqueTokenIntrospector(
            GoogleAuthService googleAuthService,
            UserService userService
    ) {
        this.googleAuthService = googleAuthService;
        this.userService = userService;
    }

    @Override
    public OAuth2IntrospectionAuthenticatedPrincipal introspect(String token) {
        // String introspectionUri = "https://oauth2.googleapis.com/tokeninfo";

        GoogleTokenInfoDto tokenInfo = googleAuthService.getGoogleTokenInfo(token);
        Collection<String> roles = userService.findUserRolesByEmail(tokenInfo.getEmail());

        Collection<GrantedAuthority> authorities = new ArrayList<>();

        for (String role: roles) {
            authorities.add(new SimpleGrantedAuthority(role));
        }

        // email is being used as the principal name
        // attached as attributes are GoogleTokenInfoDto properties
        // authorities are assigned roles from the database
        return new OAuth2IntrospectionAuthenticatedPrincipal(
                tokenInfo.getEmail(),
                tokenInfo.getMappedAttributes(),
                authorities
        );
    }
}
