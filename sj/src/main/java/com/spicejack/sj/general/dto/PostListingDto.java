package com.spicejack.sj.general.dto;

import java.sql.Timestamp;

public class PostListingDto {
    long id;
    String title;
    String authorUsername;
    Timestamp creationDate;

    public PostListingDto(){}

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthorUsername(String author_username) {
        this.authorUsername = author_username;
    }

    public void setCreationDate(Timestamp creation_date) {
        this.creationDate = creation_date;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthorUsername() {
        return authorUsername;
    }

    public Timestamp getCreationDate() {
        return creationDate;
    }
}
