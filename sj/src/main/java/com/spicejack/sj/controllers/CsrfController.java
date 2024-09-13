package com.spicejack.sj.controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
public class CsrfController {
    private final Logger logger = Logger.getLogger(CsrfController.class.toString());
    @GetMapping("/public/csrf")
    public void getCsrf(
            CsrfToken csrf
    ) {
        logger.info(csrf.getToken());
    }
}
