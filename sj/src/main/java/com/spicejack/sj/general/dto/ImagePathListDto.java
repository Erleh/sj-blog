package com.spicejack.sj.general.dto;

import java.util.List;

public class ImagePathListDto {
    List<ImagePathDto> images;
    boolean hasNext;
    boolean hasPrevious;

    public ImagePathListDto() {}

    public void setImages(List<ImagePathDto> images) {
        this.images = images;
    }

    public void setHasNext(boolean hasNext) {
        this.hasNext = hasNext;
    }

    public void setHasPrevious(boolean hasPrevious) {
        this.hasPrevious = hasPrevious;
    }

    public List<ImagePathDto> getImages() {
        return images;
    }

    public boolean isHasNext() {
        return hasNext;
    }

    public boolean isHasPrevious() {
        return hasPrevious;
    }
}
