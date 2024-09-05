import { Component, OnInit } from '@angular/core';
import { PostService } from '../common/services/post.service';
import { PostListingDto } from '../common/dtos/PostListingDto';
import { PostlistingComponent } from "./postlisting/postlisting.component";
import { ActivatedRoute } from '@angular/router';
import { CsrfService } from '../common/services/csrf.service';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [PostlistingComponent],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent implements OnInit{
  postList: PostListingDto[] = [];
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;
  pageNumber: number = 1;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private csrfServuce: CsrfService
  ) {}

  ngOnInit(): void {
    let pageNumberParam= this.route.snapshot.paramMap.get('page_number');

    if (pageNumberParam) {
      this.pageNumber = parseInt(pageNumberParam);
    }

    this.csrfServuce.getCsrf().subscribe(() => {
      this.loadPostListing();
    });
  }

  loadPostListing() {
    this.postService.getPostListings(this.pageNumber).subscribe(res => {
      console.log(res);

      this.postList = res.postListings;
      this.hasNextPage = res.hasNext;
      this.hasPreviousPage = res.hasPrevious;

      console.log(this.postList);
      console.log(this.hasNextPage);
      console.log(this.hasPreviousPage);
    });
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
