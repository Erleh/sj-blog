package com.spicejack.sj.configurations;

import com.spicejack.sj.general.dto.GoogleTokenInfoDto;
import com.spicejack.sj.services.GoogleAuthService;
import org.springframework.security.oauth2.server.resource.introspection.OAuth2IntrospectionAuthenticatedPrincipal;
import org.springframework.security.oauth2.server.resource.introspection.OpaqueTokenIntrospector;

public class GoogleOpaqueTokenIntrospector implements OpaqueTokenIntrospector {
    private final GoogleAuthService googleAuthService;

    public GoogleOpaqueTokenIntrospector(
            GoogleAuthService googleAuthService
    ) {
        this.googleAuthService = googleAuthService;
    }

    @Override
    public OAuth2IntrospectionAuthenticatedPrincipal introspect(String token) {
        String introspectionUri = "https://oauth2.googleapis.com/tokeninfo";

        try {
            GoogleTokenInfoDto tokenInfo = googleAuthService.getGoogleTokenInfo(token);

        }
    }
}
