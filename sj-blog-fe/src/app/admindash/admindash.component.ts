import { Component } from '@angular/core';
import { CreatePostFormComponent } from "./create-post-form/create-post-form.component";
import { PostSubmissionFormDto } from '../common/dtos/PostSubmissionFormDto';
import { PostService } from '../common/services/post.service';
import { ModificationPostlistComponent } from "./modification-postlist/modification-postlist.component";
import { PostListingDto } from '../common/dtos/PostListingDto';
import { PostModificationFormDto } from '../common/dtos/PostModificationDto';
import { ImageManagerComponent } from "./image-manager/image-manager.component";
import { ImagesService } from '../common/services/images.service';

@Component({
  selector: 'app-admindash',
  standalone: true,
  imports: [CreatePostFormComponent, ModificationPostlistComponent, ImageManagerComponent],
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  isModifying: boolean = false;

  hasDeleted: boolean = false;
  
  modId!: number;
  modTitle: string = "";
  modContent: string = "";

  constructor(
    private postService: PostService,
    private imagesService: ImagesService
  ) {}

  handlePostSubmission(formSubmission: PostSubmissionFormDto) {
    this.postService.createNewPost(formSubmission);
  }

  handlePostModification(modificationSubmission: PostModificationFormDto) {
    this.postService.updatePostPage(modificationSubmission);
  }

  handleModifySelection(postSelection: PostListingDto) {
    if (this.hasDeleted) {
      this.hasDeleted = false;
      return;
    }

    this.postService.getPostPage(postSelection.id).subscribe(post => {
      this.modId = post.id;
      this.modTitle = post.title;
      this.modContent = post.content;
    })
  }

  handlePostDeletion(postSelection: PostListingDto) {
    this.postService.deletePost(postSelection.id);

    this.hasDeleted = true;
  }

  handleUploadImage(file: any) {
    this.imagesService.saveImageFile(file);
  }
}
