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
  summarySize = 300;

  constructor(
    private postService: PostService
  ) {}

  handlePostSubmission(formSubmission: PostFormSubmissioDto) {
    formSubmission.summary = this.extractSummaryBlurb(formSubmission.content, this.summarySize);

    this.postService.createNewPost(formSubmission);
  }

  extractSummaryBlurb(content: String, length: number) {
    if (content.length < length) {
      return content.substring(0);
    }

    return content.substring(0, length);
  }
}
