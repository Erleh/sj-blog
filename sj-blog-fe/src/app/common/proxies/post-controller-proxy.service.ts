import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { PostSubmissionFormDto } from '../dtos/PostSubmissionFormDto';
import { Observable } from 'rxjs';
import { PostDto } from '../dtos/PostDto';
import { PostListingPageDto } from '../dtos/PostListingPageDto';
import { PostModificationFormDto } from '../dtos/PostModificationDto';

@Injectable({
  providedIn: 'root'
})
export class PostControllerProxyService {
  postLimit = 7;

  constructor(
    private httpClient : HttpClient
  ) { }

  getPostListings(page: number): Observable<PostListingPageDto> {
    return this.httpClient.post<PostListingPageDto>(
      `${environment.apiUrl}/public/get_post_listings`,
      {
        limit: this.postLimit,
        offset: page
      }
    );
  }

  getPostPage(id: number): Observable<PostDto> {
    return this.httpClient.post<PostDto>(
      `${environment.apiUrl}/public/get_post`,
      id
    );
  }

  createNewPost(postSubmission: PostSubmissionFormDto) {
    return this.httpClient.post(
      `${environment.apiUrl}/api/create_post`,
      postSubmission
    );
  }

  deletePost(postId: number) {
    return this.httpClient.post(
      `${environment.apiUrl}/api/delete_post`,
      postId
    );
  }

  updatePost(postModificationForm: PostModificationFormDto) {
    return this.httpClient.post(
      `${environment.apiUrl}/api/update_post`,
      postModificationForm
    );
  }
}
