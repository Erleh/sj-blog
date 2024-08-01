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

    public SecurityChainConfig(
            CorsConfig corsConfig
    ) {
        this.corsConfig = corsConfig;
    }

    @Bean
    public SecurityFilterChain securityFilterChain (
            HttpSecurity http
    ) throws Exception{
        // Sets allowed HttpRequest paths
        //
        // Currently permitting all requests for initial setup tests
        //
        http.authorizeHttpRequests(authorize -> {
            authorize
                    .anyRequest().permitAll();
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
