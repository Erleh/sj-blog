import { Component } from '@angular/core';
import { CreatePostFormComponent } from "./create-post-form/create-post-form.component";
import { PostSubmissionFormDto } from '../common/dtos/PostSubmissionFormDto';
import { PostService } from '../common/services/post.service';
import { ModificationPostlistComponent } from "./modification-postlist/modification-postlist.component";
import { PostListingDto } from '../common/dtos/PostListingDto';
import { PostModificationFormDto } from '../common/dtos/PostModificationDto';
import { ImageManagerComponent } from "./image-manager/image-manager.component";
import { ImagesService } from '../common/services/images.service';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-admindash',
  standalone: true,
  imports: [CreatePostFormComponent, ModificationPostlistComponent, ImageManagerComponent],
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {
  POST_SUMMARY_LENGTH = 200;

  isModifying: boolean = false;

  hasDeleted: boolean = false;
  
  modId!: number;
  modTitle: string = "";
  modContent: string = "";
  modThumbnail: string = "";

  constructor(
    private postService: PostService,
    private imagesService: ImagesService,
    private markdownService: MarkdownService
  ) {}

  // Retrieve summary of given content
  getSummary(content: string, summaryLength: number) {
    // Convert Markdown to HTML
    let htmlContent = this.markdownService.parse(content);

    // Create a temp element to hold the html
    let tempElement = document.createElement('div');
    tempElement.innerHTML = htmlContent.toString();

    // Extract plain text
    let plainText = tempElement.textContent || tempElement.innerText || '';

    // Extract summary from plain text
    return plainText.substring(0, summaryLength) + "...";
  }

  handlePostSubmission(formSubmission: PostSubmissionFormDto) {
    let summary = this.getSummary(formSubmission.content, this.POST_SUMMARY_LENGTH);

    // Provide summary for post submission
    formSubmission.summary = summary;

    this.postService.createNewPost(formSubmission);
  }

  handlePostModification(modificationSubmission: PostModificationFormDto) {
    let summary = this.getSummary(modificationSubmission.content, this.POST_SUMMARY_LENGTH);

    // Provide summary for post modification submission
    modificationSubmission.summary = summary;

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
      this.modThumbnail = post.thumbnail;

      console.log(this.modThumbnail);
    });
  }

  handlePostDeletion(postSelection: PostListingDto) {
    this.postService.deletePost(postSelection.id);

    this.hasDeleted = true;
  }

  handleUploadImage(file: any) {
    this.imagesService.saveImageFile(file);
  }
}
