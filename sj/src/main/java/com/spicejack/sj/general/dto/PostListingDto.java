package com.spicejack.sj.general.dto;

import java.sql.Timestamp;

public class PostListingDto {
    long id;
    String title;
    String summary;
    String authorUsername;
    Timestamp creationDate;

    public PostListingDto(){}

    public void setCreationDate(Timestamp creationDate) {
        this.creationDate = creationDate;
    }

    public void setAuthorUsername(String authorUsername) {
        this.authorUsername = authorUsername;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Timestamp getCreationDate() {
        return creationDate;
    }

    public String getAuthorUsername() {
        return authorUsername;
    }

    public String getSummary() {
        return summary;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
}
