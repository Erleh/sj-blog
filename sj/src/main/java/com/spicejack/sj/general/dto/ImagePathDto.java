package com.spicejack.sj.general.dto;

public class ImagePathDto {
    public long id;
    public String path;

    public ImagePathDto() {}

    public void setId(long id) {
        this.id = id;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public long getId() {
        return id;
    }

    public String getPath() {
        return path;
    }
}
