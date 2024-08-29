package com.spicejack.sj.general.dto;

public class PostFormSubmissionDto {
    String title;
    String content;

    public PostFormSubmissionDto() {}

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public String getTitle() {
        return title;
    }
}
