import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostFormSubmissioDto } from '../../common/dtos/PostSubmissionFormDto';

@Component({
  selector: 'app-create-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post-form.component.html',
  styleUrl: './create-post-form.component.css'
})
export class CreatePostFormComponent {
  @Output() postFormSubmissionEvent = new EventEmitter();

  postFormSubmission: PostFormSubmissioDto = {
    title: "", 
    summary: "", 
    content: ""
  }

  onSubmit() {
    this.postFormSubmissionEvent.emit(this.postFormSubmission);
  }
}
