import { Component } from '@angular/core';
import { PostService } from '../common/services/post.service';
import { PostListingDto } from '../common/dtos/PostListingDto';
import { PostlistingComponent } from "./postlisting/postlisting.component";
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DiscordSvgIconComponent } from "../common/svgs/discord-svg-icon/discord-svg-icon.component";
import { YoutubeSvgIconComponent } from "../common/svgs/youtube-svg-icon/youtube-svg-icon.component";

@Component({
  selector: 'app-postlist',
  standalone: true,
  imports: [PostlistingComponent, RouterLink, DiscordSvgIconComponent, YoutubeSvgIconComponent],
  templateUrl: './postlist.component.html',
  styleUrl: './postlist.component.css'
})
export class PostlistComponent {
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
    private activatedRoute: ActivatedRoute
  ) {
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

      this.loadPostListing();
    })
  }

  loadPostListing() {
    this.postService.getPostListings(this.pageNumber).subscribe((res) => {
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
