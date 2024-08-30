package com.spicejack.sj.controllers;

import com.spicejack.sj.general.dto.PostFormSubmissionDto;
import com.spicejack.sj.general.dto.PostListingDto;
import com.spicejack.sj.services.PostService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.server.resource.introspection.OAuth2IntrospectionAuthenticatedPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PostController {
    private final PostService postService;

    public PostController(
            PostService postService
    ) {
        this.postService = postService;
    }

    @GetMapping("/public/get_posts")
    List<PostListingDto> getPosts(
            @RequestBody int limit,
            @RequestBody int offset
    ) {
        return this.postService.getPostList(limit, offset);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/api/create_post")
    void createPost(
            @RequestBody PostFormSubmissionDto postSubmission,
            @AuthenticationPrincipal OAuth2IntrospectionAuthenticatedPrincipal principal
    ) {
        // note: user email is being used as our principal name
        this.postService.createPost(
                postSubmission.getTitle(),
                postSubmission.getContent(),
                postSubmission.getSummary(),
                principal.getName()
        );
    }
}
