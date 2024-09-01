import { Component } from '@angular/core';
import { PostService } from '../common/services/post.service';
import { PostListingDto } from '../common/dtos/PostListingDto';
import { PostlistingComponent } from "./postlisting/postlisting.component";

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [PostlistingComponent],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent {
  postList: PostListingDto[] = [];

  constructor(
    private postService: PostService
  ) {
    postService.getPostPage(1).subscribe(res => {
      this.postList = res;
      console.log(this.postList);
    });
  }

  loadPostListing(page: number) {
    this.postService.getPostPage(page);
  }
}
