package com.spicejack.sj.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AwsController {
    @GetMapping("/public/health")
    public ResponseEntity<Void> getHealth() {
        return ResponseEntity.ok().build();
    }

    @GetMapping("/")
    public ResponseEntity<Void> getDefault() {
        return ResponseEntity.ok().build();
    }
}
