package com.spicejack.sj.services;

import com.spicejack.sj.general.dto.PostDto;
import com.spicejack.sj.general.dto.PostListingDto;
import com.spicejack.sj.general.dto.PostListingPaginationDto;
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

    public long getPostCount() {
        return this.postRepository.getPostCount();
    }

    public PostListingPaginationDto getPostListPage(int size, int offset) {
        try {
            PostListingPaginationDto page = new PostListingPaginationDto();
            page.setHasNext(false);
            page.setHasPrevious(false);

            long postCount = getPostCount();

            // If there should be a next page
            page.setHasNext(offset + size < postCount);

            // If there should be a previous page
            page.setHasPrevious(offset > 1);

            page.setPostListings(getPostList(size, offset));

            return page;
        }
        // In the case that there is no data to retrieve return null
        catch (Exception e) {
            return null;
        }
    }

    public List<PostListingDto> getPostList(int limit, int offset) {
        return this.postRepository.getPostList(limit, offset);
    }

    public PostDto getPost(long id) {
        return this.postRepository.getPost(id);
    }

    public void createPost(
            String title,
            String content,
            String summary,
            String thumbnail,
            String email
    ) {
        // Retrieve user data using attached email
        UserDto user = userService.getUserByEmail(email);

        // Retrieve related data for saving a new post
        long userId = user.getId();
        String username = user.getUsername();

        // Update database
        this.postRepository.createNewPost(userId, title, content, summary, thumbnail, username);
    }

    public void updatePost(
            long postId,
            String title,
            String content,
            String email,
            String thumbnail
    ) {
        // Retrieve user data using attached email
        UserDto user = userService.getUserByEmail(email);

        // Retrieve related data for saving a new post
        long userId = user.getId();
        String username = user.getUsername();

        // Update database
        this.postRepository.updatePost(postId, userId, title, content, thumbnail, username);
    }

    public void deletePost(
            long postId
    ) {
        // Delete post of given id
        this.postRepository.deletePost(postId);
    }
}
