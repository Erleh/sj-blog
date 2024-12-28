package com.spicejack.sj.controllers;

import com.spicejack.sj.services.PostService;
import com.spicejack.sj.services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;


@RestController
public class TestController {
    Logger logger = Logger.getLogger(TestController.class.toString());
    private final UserService userService;
    private final PostService postService;

    public TestController(
            UserService userService,
            PostService postService
    ){
        this.userService = userService;
        this.postService = postService;
    }

    @GetMapping("/public/test/get_hello")
    String testGet() {
        return "Hello";
    }

    @GetMapping("/public/test/get_csrf")
    String testGetCsrf(
            HttpServletRequest request,
            HttpServletResponse response
    ) {
        CsrfToken token = (CsrfToken) request.getAttribute("_csrf");

        return token.getToken();
    }

    @GetMapping("/public/test/get_user")
    boolean testGetUser() {
        logger.info("Getting user");
        return userService.checkIfUserExistsByEmail("example@example.com");
    }

    @GetMapping("/api/private_get_hello")
    String testPrivateGet() {
        return "Hello";
    }

    @PostMapping("/public/test/post_hello")
    String testPost(
            @RequestBody String test
    ) {
        if (test.compareTo("success") == 0) {
            return "Hello";
        }
        return "fail";
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/api/admin_get_hello")
    String testAdminHello() {
        return "Hello admin";
    }
}
