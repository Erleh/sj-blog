import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostSubmissionFormDto } from '../../common/dtos/PostSubmissionFormDto';
import { PostModificationFormDto } from '../../common/dtos/PostModificationDto';

@Component({
  selector: 'app-create-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post-form.component.html',
  styleUrl: './create-post-form.component.css'
})
export class CreatePostFormComponent implements OnChanges{
  @Input() modTitle!: string;
  @Input() modContent!: string;
  @Input() modId!: number;
  @Input() isModifying: boolean = false;
  
  @Output() postFormSubmissionEvent = new EventEmitter();
  @Output() postFormModificationEvent = new EventEmitter();
  
  postSubmissionForm: PostSubmissionFormDto = {
    title: this.modTitle, 
    content: this.modContent
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.postSubmissionForm.title = this.modTitle;
    this.postSubmissionForm.content = this.modContent;
  }

  onSubmit() {
    if (this.isModifying) {
      // Modify an existing post
      let modificationForm: PostModificationFormDto = {
        id: this.modId,
        title: this.postSubmissionForm.title,
        content: this.postSubmissionForm.content
      };
      this.postFormModificationEvent.emit(modificationForm);
    } else {
      // Create a new post
      this.postFormSubmissionEvent.emit(this.postSubmissionForm);
    }

    // Then clear form
    this.postSubmissionForm.title = "";
    this.postSubmissionForm.content = "";
  }
}
