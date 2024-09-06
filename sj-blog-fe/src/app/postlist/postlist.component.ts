import { Component, OnInit } from '@angular/core';
import { PostService } from '../common/services/post.service';
import { PostListingDto } from '../common/dtos/PostListingDto';
import { PostlistingComponent } from "./postlisting/postlisting.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CsrfService } from '../common/services/csrf.service';

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [PostlistingComponent, RouterLink],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent implements OnInit{
  postList: PostListingDto[] = [];
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;
  
  // Set refs for page number
  pageNumber: number = 1;
  prevPageNum: number = this.pageNumber > 0 ? this.pageNumber - 1: this.pageNumber;
  nextPageNum: number = this.pageNumber + 1;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private csrfServuce: CsrfService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let pageNumberParam= this.route.snapshot.paramMap.get('page_number');

      // Ensure there exists a pagenum param
      if (pageNumberParam) {
        this.pageNumber = parseInt(pageNumberParam);
      }

      // Update page refs
      if (this.pageNumber > 1) {
        this.prevPageNum = this.pageNumber - 1;
        this.nextPageNum = this.pageNumber + 1;
      }
  
      // Ensure existence of csrf token before request
      this.csrfServuce.getCsrf().subscribe(() => {
        this.loadPostListing();
      });
    })
  }

  loadPostListing() {
    this.postService.getPostListings(this.pageNumber).subscribe(res => {
      this.postList = res.postListings;
      this.hasNextPage = res.hasNext;
      this.hasPreviousPage = res.hasPrevious;
    });
  }

  handleNextPage() {
    this.pageNumber++;
    this.prevPageNum++;
    this.nextPageNum++;

    this.loadPostListing();
  }

  handlePrevPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
      this.prevPageNum--;
      this.nextPageNum--;
    }

    this.loadPostListing();
  }
}
