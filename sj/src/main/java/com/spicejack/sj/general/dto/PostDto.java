package com.spicejack.sj.general.dto;

import java.sql.Timestamp;

public class PostDto {
    long id;
    String title;
    String content;
    String thumbnail;
    String authorUsername;
    Timestamp creationDate;

    public PostDto() {}

    public void setContent(String content) {
        this.content = content;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public void setAuthorUsername(String authorUsername) {
        this.authorUsername = authorUsername;
    }

    public void setCreationDate(Timestamp creationDate) {
        this.creationDate = creationDate;
    }

    public String getContent() {
        return content;
    }

    public String getTitle() {
        return title;
    }

    public long getId() {
        return id;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public String getAuthorUsername() {
        return authorUsername;
    }

    public Timestamp getCreationDate() {
        return creationDate;
    }
}
