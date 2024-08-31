import { Component } from '@angular/core';
import { PostService } from '../common/services/post.service';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent {

  constructor(
    private postService: PostService
  ) {
    postService.getPostPage(1).subscribe( res => {
      console.log(res);
    });
  }

  loadPostListing(page: number) {
    this.postService.getPostPage(page);
  }
}
