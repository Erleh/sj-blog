import { Injectable } from '@angular/core';
import { PostControllerProxyService } from '../proxies/post-controller-proxy.service';
import { PostFormSubmissioDto } from '../dtos/PostSubmissionFormDto';
import { Observable } from 'rxjs';
import { PostDto } from '../dtos/PostDto';
import { PostListingPageDto } from '../dtos/PostListingPageDto';

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

  createNewPost(postSubmissionForm: PostFormSubmissioDto) {
    this.postControllerProxy.createNewPost(postSubmissionForm).subscribe();
  }
}
