import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../common/services/post.service';
import { PostDto } from '../common/dtos/PostDto';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  postData: PostDto = {
    id: 0,
    title: "",
    content: "",
    authorUsername: "",
    creationDate: new Date()
  };

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    let postId = this.route.snapshot.paramMap.get('id');

    if (postId) {
      this.loadPost(parseInt(postId));
    }
  }

  loadPost(id: number) {
    this.postService.getPostPage(id).subscribe(postData => {
      this.postData = postData;
      this.postData.creationDate = new Date(this.postData.creationDate);
    });
  }
}
