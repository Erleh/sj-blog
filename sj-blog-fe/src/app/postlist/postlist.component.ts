import { Component, OnInit } from '@angular/core';
import { PostService } from '../common/services/post.service';
import { PostListingDto } from '../common/dtos/PostListingDto';
import { PostlistingComponent } from "./postlisting/postlisting.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [PostlistingComponent],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent implements OnInit{
  postList: PostListingDto[] = [];
  pageNumber: number = 1;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    let pageNumberParam= this.route.snapshot.paramMap.get('page_number');

    if (pageNumberParam) {
      this.pageNumber = parseInt(pageNumberParam);
    }

    this.postService.getPostListings(this.pageNumber).subscribe(res => {
      this.postList = res;
      console.log(this.postList);
    });
  }

  loadPostListing() {
    this.postService.getPostListings(this.pageNumber);
  }

  handleNextPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
    }
    this.loadPostListing();
  }

  handlePrevPage() {
    this.pageNumber++;
    this.loadPostListing();
  }
}
