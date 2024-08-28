import { Component } from '@angular/core';
import { CreatePostFormComponent } from "./create-post-form/create-post-form.component";
import { PostFormSubmissioDto } from '../common/dtos/PostSubmissionFormDto';
import { PostService } from '../common/services/post.service';

@Component({
  selector: 'app-admindash',
  standalone: true,
  imports: [CreatePostFormComponent],
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  constructor(
    private postService: PostService
  ) {}

  handlePostSubmission(formSubmission: PostFormSubmissioDto) {
    console.log(formSubmission.title);
    console.log(formSubmission.summary);
    console.log(formSubmission.content);
    this.postService.createNewPost(formSubmission);
  }
}
