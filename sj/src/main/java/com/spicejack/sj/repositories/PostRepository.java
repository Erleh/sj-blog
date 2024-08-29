package com.spicejack.sj.repositories;

import com.spicejack.sj.general.dto.PostDto;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<PostDto, Long> {
    @Modifying
    @Query("INSERT INTO posts (id, user_id, title, content, authorUsername, creationDate) VALUES (DEFAULT, :userid, :title, :content, :authorUsername, DEFAULT)")
    void createNewPost(long userid, String title, String content, String authorUsername);

    @Modifying
    @Query("DELETE FROM posts WHERE id = :postId")
    void deletePost(long postId);
}
