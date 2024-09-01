import { Injectable } from '@angular/core';
import { PostControllerProxyService } from '../proxies/post-controller-proxy.service';
import { PostFormSubmissioDto } from '../dtos/PostSubmissionFormDto';
import { Observable } from 'rxjs';
import { PostListingDto } from '../dtos/PostListingDto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private postControllerProxy: PostControllerProxyService
  ) {}

  // Load requested page of posts
  getPostPage(page: number): Observable<PostListingDto[]>{
    return this.postControllerProxy.getPostPage(page);
  }

  createNewPost(postSubmissionForm: PostFormSubmissioDto) {
    this.postControllerProxy.createNewPost(postSubmissionForm).subscribe();
  }
}
