import { Component, Input } from '@angular/core';
import { PostListingDto } from '../../common/dtos/PostListingDto';

@Component({
  selector: 'app-postlisting',
  standalone: true,
  imports: [],
  templateUrl: './postlisting.component.html',
  styleUrl: './postlisting.component.css'
})
export class PostlistingComponent {
  @Input(
    {
      required: true
    }
  ) postData!: PostListingDto;
  // Accept as input, the data needed to display a post in the post list
  // Title
  // Summary
  // Author, Date made
}
