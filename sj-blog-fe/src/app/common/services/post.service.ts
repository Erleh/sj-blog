import { Injectable } from '@angular/core';
import { PostControllerProxyService } from '../proxies/post-controller-proxy.service';
import { PostFormSubmissioDto } from '../dtos/PostSubmissionFormDto';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private postControllerProxy: PostControllerProxyService
  ) { }

  createNewPost(postSubmissionForm: PostFormSubmissioDto) {
    this.postControllerProxy.createNewPost(postSubmissionForm).subscribe();
  }
}
