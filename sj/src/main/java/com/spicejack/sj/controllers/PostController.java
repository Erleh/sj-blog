package com.spicejack.sj.controllers;

import com.spicejack.sj.general.dto.PostFormSubmissionDto;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.logging.Logger;

@RestController
public class PostController {
    Logger logger = Logger.getLogger(PostController.class.toString());

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/api/create_post")
    void createPost(
            @RequestBody PostFormSubmissionDto postSubmission
    ) {
        logger.info("Post Received");
        logger.info(postSubmission.getTitle());
        logger.info(postSubmission.getSummary());
        logger.info(postSubmission.getContent());
    }
}
