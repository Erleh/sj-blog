package com.spicejack.sj.configurations;

import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jdbc.repository.config.EnableJdbcRepositories;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

@Configuration
@EnableFeignClients(
        "com.spicejack.sj.proxies"
)
@EnableJdbcRepositories(
        "com.spicejack.sj.repositories"
)
@EnableMethodSecurity
public class ApplicationConfig {
}
