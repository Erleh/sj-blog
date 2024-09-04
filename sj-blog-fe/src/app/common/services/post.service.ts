import { Injectable } from '@angular/core';
import { PostControllerProxyService } from '../proxies/post-controller-proxy.service';
import { PostFormSubmissioDto } from '../dtos/PostSubmissionFormDto';
import { Observable } from 'rxjs';
import { PostListingDto } from '../dtos/PostListingDto';
import { PostDto } from '../dtos/PostDto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private postControllerProxy: PostControllerProxyService
  ) {}

  // Load requested page of posts
  getPostListings(page: number): Observable<PostListingDto[]>{
    return this.postControllerProxy.getPostListings(page);
  }

  getPostPage(id: number): Observable<PostDto>{
    return this.postControllerProxy.getPostPage(id);
  }

  createNewPost(postSubmissionForm: PostFormSubmissioDto) {
    this.postControllerProxy.createNewPost(postSubmissionForm).subscribe();
  }
}
