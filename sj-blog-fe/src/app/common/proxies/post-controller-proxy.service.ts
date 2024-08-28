import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { PostFormSubmissioDto } from '../dtos/PostSubmissionFormDto';

@Injectable({
  providedIn: 'root'
})
export class PostControllerProxyService {

  constructor(
    private httpClient : HttpClient
  ) { }

  createNewPost(postSubmission: PostFormSubmissioDto) {
    console.log("Attempting to create post");
    
    return this.httpClient.post(
      `${environment.apiUrl}/api/create_post`,
      postSubmission
    );
  }
}
