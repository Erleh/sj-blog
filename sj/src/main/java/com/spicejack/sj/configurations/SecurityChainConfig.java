package com.spicejack.sj.configurations;

import com.spicejack.sj.configurations.customizers.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.server.Cookie;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;


@Configuration
public class SecurityChainConfig {
    @Value("${backend.root.url}")
    private String backendRootUrl;
    private final CorsConfig corsConfig;
    private final GoogleOpaqueTokenIntrospector googleOpaqueTokenIntrospector;
    private final CookieBearerTokenResolver cookieBearerTokenResolver;
    private final CustomLogoutHandler logoutHandler;
    private final CustomLogoutSuccessHandler logoutSuccessHandler;

    public SecurityChainConfig(
            CorsConfig corsConfig,
            GoogleOpaqueTokenIntrospector googleOpaqueTokenIntrospector,
            CookieBearerTokenResolver bearerTokenResolver,
            CustomLogoutHandler logoutHandler,
            CustomLogoutSuccessHandler logoutSuccessHandler
    ) {
        this.corsConfig = corsConfig;
        this.googleOpaqueTokenIntrospector = googleOpaqueTokenIntrospector;
        this.cookieBearerTokenResolver = bearerTokenResolver;
        this.logoutHandler = logoutHandler;
        this.logoutSuccessHandler = logoutSuccessHandler;
    }

    @Bean
    public SecurityFilterChain securityFilterChain (
            HttpSecurity http
    ) throws Exception{
        // Authorized paths
        http.authorizeHttpRequests(authorize -> {
            authorize
                    .requestMatchers(
                            "/public/**",
                            "/error",
                            "/webjars/**",
                            "/login",
                            "/logout",
                            "/favicon.ico",
                            "/"
                    ).permitAll()
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
        final CookieCsrfTokenRepository repo = CookieCsrfTokenRepository.withHttpOnlyFalse();
        repo.setCookieCustomizer(cookie -> {
                    cookie
                        .sameSite(Cookie.SameSite.NONE.attributeValue())
                        .secure(true)
                        .domain(backendRootUrl);
                }
        );
        http.csrf(csrf -> {
            csrf.csrfTokenRepository(repo);
            csrf.csrfTokenRequestHandler(new SpaCsrfTokenRequestHandler());
        }).addFilterAfter(new CsrfCookieFilter(), BasicAuthenticationFilter.class);

        // CORS configuration
        http.cors(cors -> {
            cors.configurationSource(corsConfig.getCorsConfiguration());
        });

        // Logout Configuration
        http.logout(logout -> {
            logout.logoutUrl("/logout");
            logout.addLogoutHandler(logoutHandler);
            logout.logoutSuccessHandler(logoutSuccessHandler);
        });

        return http.build();
    }
}
