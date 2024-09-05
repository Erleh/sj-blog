import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { PostFormSubmissioDto } from '../dtos/PostSubmissionFormDto';
import { Observable } from 'rxjs';
import { PostDto } from '../dtos/PostDto';
import { PostListingPageDto } from '../dtos/PostListingPageDto';

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

  createNewPost(postSubmission: PostFormSubmissioDto) {
    return this.httpClient.post(
      `${environment.apiUrl}/api/create_post`,
      postSubmission
    );
  }
}
