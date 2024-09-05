package com.spicejack.sj.general.dto;

import java.util.List;

public class PostListingPaginationDto {
    List<PostListingDto> postListings;
    boolean hasNext;
    boolean hasPrevious;

    public PostListingPaginationDto() {}

    public void setHasPrevious(boolean hasPrevious) {
        this.hasPrevious = hasPrevious;
    }

    public void setHasNext(boolean hasNext) {
        this.hasNext = hasNext;
    }

    public void setPostListings(List<PostListingDto> postListings) {
        this.postListings = postListings;
    }

    public List<PostListingDto> getPostListings() {
        return postListings;
    }

    public boolean isHasNext() {
        return hasNext;
    }

    public boolean isHasPrevious() {
        return hasPrevious;
    }
}
