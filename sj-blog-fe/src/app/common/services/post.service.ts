import { Injectable } from '@angular/core';
import { PostControllerProxyService } from '../proxies/post-controller-proxy.service';
import { PostSubmissionFormDto } from '../dtos/PostSubmissionFormDto';
import { Observable } from 'rxjs';
import { PostDto } from '../dtos/PostDto';
import { PostListingPageDto } from '../dtos/PostListingPageDto';
import { PostModificationFormDto } from '../dtos/PostModificationDto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private postControllerProxy: PostControllerProxyService
  ) {}

  // Load requested page of posts
  getPostListings(page: number): Observable<PostListingPageDto>{
    return this.postControllerProxy.getPostListings(page);
  }

  // Get post by post id
  getPostPage(id: number): Observable<PostDto>{
    return this.postControllerProxy.getPostPage(id);
  }

  updatePostPage(postModificationForm: PostModificationFormDto) {
    this.postControllerProxy.updatePost(postModificationForm).subscribe();
  }

  createNewPost(postSubmissionForm: PostSubmissionFormDto) {
    this.postControllerProxy.createNewPost(postSubmissionForm).subscribe();
  }
}
