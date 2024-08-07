package com.spicejack.sj.configurations;

import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableFeignClients(
        "com.spicejack.sj.proxies"
)
public class ApplicationConfig {
}
