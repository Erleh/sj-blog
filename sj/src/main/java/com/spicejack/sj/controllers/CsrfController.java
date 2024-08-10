package com.spicejack.sj.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CsrfController {

    @GetMapping("/public/csrf")
    public void getCsrf() {}
}
