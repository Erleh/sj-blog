import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostListingDto } from '../../common/dtos/PostListingDto';
import { PostrefComponent } from "./postref/postref.component";
import { PostService } from '../../common/services/post.service';

@Component({
  selector: 'app-modification-postlist',
  standalone: true,
  imports: [PostrefComponent],
  templateUrl: './modification-postlist.component.html',
  styleUrl: './modification-postlist.component.css'
})
export class ModificationPostlistComponent implements OnInit{
  @Output() selectedPostEvent = new EventEmitter();
  @Output() deletePostEvent = new EventEmitter();

  // Load list of postListings
  postList: PostListingDto[] = [];

  pageNumber: number = 1;
  hasNextPage: boolean = false;
  hasPreviousPage: boolean = false;

  selectedPost: PostListingDto = {
    id: 0,
    title: "",
    authorUsername: "",
    creationDate: new Date()
  };

  constructor (
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.loadPostListing();
  }

  loadPostListing() {
    this.postService.getPostListings(this.pageNumber).subscribe(res => {
      this.postList = res.postListings;
      this.hasNextPage = res.hasNext;
      this.hasPreviousPage = res.hasPrevious;
    });
  }

  onSelection(selected: PostListingDto) {
    this.selectedPost = selected;

    this.selectedPostEvent.emit(selected);
  }

  onDeletion(selected: PostListingDto) {
    this.deletePostEvent.emit(selected);
    this.loadPostListing();

    this.postList.filter(post => {
      if (post.id !== selected.id) {
        return post;
      }
      return;
    });
  }
}
