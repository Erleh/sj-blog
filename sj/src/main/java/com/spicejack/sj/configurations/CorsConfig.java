package com.spicejack.sj.configurations;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.List;

@Configuration
public class CorsConfig {
    @Value("${frontend.origin.url}")
    private String frontendOriginUrl;

    public CorsConfigurationSource getCorsConfiguration() {
        return request -> {
            CorsConfiguration config = new CorsConfiguration();

            // Allowed request origin
            config.setAllowedOrigins(
                    List.of(this.frontendOriginUrl)
            );

            // Allowed http methods
            config.setAllowedMethods(
                    List.of("GET", "POST", "PUT", "DELETE")
            );

            // Allowed Headers
            config.setAllowedHeaders(
                    List.of("*")
            );

            // Allow cookies
            config.setAllowCredentials(true);

            return config;
        };
    }
}
