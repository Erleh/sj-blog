package com.spicejack.sj.controllers;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
public class CsrfController {
    @GetMapping("/public/csrf")
    public void getCsrf(
            CsrfToken csrf
    ) {}
}
