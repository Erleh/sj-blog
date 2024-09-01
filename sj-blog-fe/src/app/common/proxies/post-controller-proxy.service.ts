import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { PostFormSubmissioDto } from '../dtos/PostSubmissionFormDto';
import { Observable } from 'rxjs';
import { PostListingDto } from '../dtos/PostListingDto';

@Injectable({
  providedIn: 'root'
})
export class PostControllerProxyService {
  postLimit = 7;

  constructor(
    private httpClient : HttpClient
  ) { }

  getPostPage(page: number): Observable<PostListingDto[]> {
    return this.httpClient.post<PostListingDto[]>(
      `${environment.apiUrl}/public/get_posts`,
      {
        limit: this.postLimit,
        offset: this.postLimit * (page - 1)
      }
    )
  }

  createNewPost(postSubmission: PostFormSubmissioDto) {
    return this.httpClient.post(
      `${environment.apiUrl}/api/create_post`,
      postSubmission
    );
  }
}
