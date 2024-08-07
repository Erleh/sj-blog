package com.spicejack.sj.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
		"com.spicejack.sj.configurations",
		"com.spicejack.sj.proxies",
		"com.spicejack.sj.services",
		"com.spicejack.sj.controllers"
})
public class SjApplication {

	public static void main(String[] args) {
		SpringApplication.run(SjApplication.class, args);
	}

}
