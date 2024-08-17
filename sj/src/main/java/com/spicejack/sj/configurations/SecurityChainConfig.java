package com.spicejack.sj.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;


@Configuration
public class SecurityChainConfig {
    private final CorsConfig corsConfig;
    private final GoogleOpaqueTokenIntrospector googleOpaqueTokenIntrospector;
    private final CookieBearerTokenResolver cookieBearerTokenResolver;

    public SecurityChainConfig(
            CorsConfig corsConfig,
            GoogleOpaqueTokenIntrospector googleOpaqueTokenIntrospector,
            CookieBearerTokenResolver bearerTokenResolver
    ) {
        this.corsConfig = corsConfig;
        this.googleOpaqueTokenIntrospector = googleOpaqueTokenIntrospector;
        this.cookieBearerTokenResolver = bearerTokenResolver;
    }

    @Bean
    public SecurityFilterChain securityFilterChain (
            HttpSecurity http
    ) throws Exception{
        // Authorized paths
        http.authorizeHttpRequests(authorize -> {
            authorize
                    .requestMatchers("/public/**", "/error", "/webjars/**").permitAll()
                    .anyRequest().authenticated();
        });

        // Handle oauth2
        http.oauth2ResourceServer(oauth2 -> {oauth2
            .opaqueToken(opaqueToken -> {
                opaqueToken
                    .introspector(googleOpaqueTokenIntrospector);
            })
            .bearerTokenResolver(cookieBearerTokenResolver);
        });

        // CSRF Security configuration
        http.csrf(csrf -> {
            csrf.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
            csrf.csrfTokenRequestHandler(new SpaCsrfTokenRequestHandler());
        }).addFilterAfter(new CsrfCookieFilter(), BasicAuthenticationFilter.class);

        // CORS configuration
        http.cors(cors -> {
            cors.configurationSource(corsConfig.getCorsConfiguration());
        });

        return http.build();
    }
}
