package com.spicejack.sj.repositories;

import com.spicejack.sj.general.dto.PostDto;
import com.spicejack.sj.general.dto.PostListingDto;
import org.springframework.data.jdbc.repository.query.Modifying;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PostRepository extends CrudRepository<PostDto, Long> {
    @Query("SELECT COUNT(*) FROM posts")
    long getPostCount();

    @Query("SELECT id, title, summary, thumbnail, author_username, creation_date FROM posts ORDER BY creation_date DESC LIMIT :limit OFFSET :offset")
    List<PostListingDto> getPostList(int limit, int offset);

    @Query("SELECT id, title, content, author_username, creation_date FROM posts WHERE id = :id")
    PostDto getPost(long id);

    @Modifying
    @Query("INSERT INTO posts (id, user_id, title, content, summary, thumbnail, author_username, creation_date) VALUES (DEFAULT, :userid, :title, :content, :summary, :thumbnail, :authorUsername, DEFAULT)")
    void createNewPost(long userid, String title, String content, String summary, String thumbnail, String authorUsername);

    @Modifying
    @Query("UPDATE posts SET user_id = :userid, title = :title, content = :content, thumbnail = :thumbnail, author_username = :authorUsername WHERE id = :postId")
    void updatePost(long postId, long userid, String title, String content, String thumbnail, String authorUsername);

    @Modifying
    @Query("DELETE FROM posts WHERE id = :postId")
    void deletePost(long postId);
}
