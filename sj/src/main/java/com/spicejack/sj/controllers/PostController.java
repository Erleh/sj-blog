package com.spicejack.sj.controllers;

import com.spicejack.sj.general.dto.PostDto;
import com.spicejack.sj.general.dto.PostFormSubmissionDto;
import com.spicejack.sj.general.dto.PostListingPaginationDto;
import com.spicejack.sj.general.dto.PostUpdateFormDto;
import com.spicejack.sj.services.PostService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.server.resource.introspection.OAuth2IntrospectionAuthenticatedPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.logging.Logger;

@RestController
public class PostController {
    private final Logger logger = Logger.getLogger(PostController.class.toString());
    private final PostService postService;

    public PostController(
            PostService postService
    ) {
        this.postService = postService;
    }

    @GetMapping("/public/get_post_listings")
    PostListingPaginationDto getPosts(
            @RequestParam int pageNumber,
            @RequestParam int size
    ) {
        int offset = size * (pageNumber - 1);

        return this.postService.getPostListPage(size, offset);
    }

    @PostMapping("/public/get_post")
    PostDto getPost(
            @RequestBody long id
    ) {
        return this.postService.getPost(id);
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
                principal.getName()
        );
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/api/update_post")
    void updatePost(
            @RequestBody PostUpdateFormDto updateSubmission,
            @AuthenticationPrincipal OAuth2IntrospectionAuthenticatedPrincipal principal
    ) {
        this.postService.updatePost(
                updateSubmission.getId(),
                updateSubmission.getTitle(),
                updateSubmission.getContent(),
                principal.getName()
        );
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/api/delete_post")
    void deletePost(
            @RequestBody long postId
    ) {
        this.postService.deletePost(postId);
    }
}
