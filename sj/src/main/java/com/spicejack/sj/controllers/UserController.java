package com.spicejack.sj.controllers;

import com.spicejack.sj.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/public/does_username_exist")
    boolean doesUsernameExist(
            @RequestParam String username
    ) {
        return userService.checkIfUserExistsByUsername(username);
    }
}
