import { PostListingDto } from "./PostListingDto";

export interface PostListingPageDto {
    postListings: PostListingDto[],
    hasNext: boolean,
    hasPrevious: boolean
}