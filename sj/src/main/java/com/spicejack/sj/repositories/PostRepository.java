package com.spicejack.sj.repositories;

import com.spicejack.sj.general.dto.PostDto;
import com.spicejack.sj.general.dto.PostListingDto;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepository extends CrudRepository<PostDto, Long> {
    @Query("SELECT (title, summary, authorUsername, creationDate) FROM posts ORDER BY creationDate DESC LIMIT :limit OFFSET :offset")
    List<PostListingDto> getPostList(int limit, int offset);

    @Modifying
    @Query("INSERT INTO posts (id, user_id, title, content, summary, authorUsername, creationDate) VALUES (DEFAULT, :userid, :title, :content, :summary, :authorUsername, DEFAULT)")
    void createNewPost(long userid, String title, String content, String summary, String authorUsername);

    @Modifying
    @Query("DELETE FROM posts WHERE id = :postId")
    void deletePost(long postId);
}
