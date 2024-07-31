package com.spicejack.sj.controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class TestController {
    @GetMapping("/get")
    String testGet() {
        return "Hello";
    }

    @GetMapping("/get_csrf")
    String testGetCsrf(
            HttpServletRequest request
    ) {
        CsrfToken token = (CsrfToken) request.getAttribute("_csrf");

        return token.getToken();
    }
}
