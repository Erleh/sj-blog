package com.spicejack.sj.general.dto;

public class PostUpdateFormDto {
    long id;
    String title;
    String content;

    public PostUpdateFormDto() {}

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }
}
