package com.spicejack.sj.general.dto;

public class PostUpdateFormDto {
    long id;
    String title;
    String content;
    String thumbnail;

    public PostUpdateFormDto() {}

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
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

    public String getThumbnail() {
        return thumbnail;
    }

    public String getContent() {
        return content;
    }
}
