package com.spicejack.sj.controllers;

import com.spicejack.sj.services.UserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/public/does_username_exist")
    boolean doesUsernameExist(
            @RequestBody String username
    ) {
        return userService.checkIfUserExistsByUsername(username);
    }
}
