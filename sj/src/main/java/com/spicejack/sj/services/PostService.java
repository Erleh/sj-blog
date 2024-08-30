package com.spicejack.sj.services;

import com.spicejack.sj.general.dto.PostListingDto;
import com.spicejack.sj.general.dto.UserDto;
import com.spicejack.sj.repositories.PostRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostRepository postRepository;
    private final UserService userService;

    public PostService(
            PostRepository postRepository,
            UserService userService
    ) {
        this.postRepository = postRepository;
        this.userService = userService;
    }

    public List<PostListingDto> getPostList(int limit, int offset) {
        return this.postRepository.getPostList(limit, offset);
    }

    public void createPost(
            String title,
            String content,
            String summary,
            String email
    ) {
        // Retrieve user data using attached email
        UserDto user = userService.getUserByEmail(email);

        // Retrieve related data for saving a new post
        long userId = user.getId();
        String username = user.getUsername();

        // Update database
        this.postRepository.createNewPost(userId, title, content, summary, username);
    }
}
