package com.spicejack.sj.general.dto;

public class PostFormSubmissionDto {
    String title;
    String content;
    String summary;

    public PostFormSubmissionDto() {}

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getContent() {
        return content;
    }

    public String getTitle() {
        return title;
    }

    public String getSummary() {
        return summary;
    }
}
