import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostListingDto } from '../../common/dtos/PostListingDto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-postlisting',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './postlisting.component.html',
  styleUrl: './postlisting.component.css'
})
export class PostlistingComponent implements OnInit{
  @Input(
    {
      required: true
    }
  ) postData!: PostListingDto;

  @Output() onClicked = new EventEmitter();

  date: String = "";

  ngOnInit(): void {
    let dateString = new Date(this.postData.creationDate);
    this.date = dateString.toLocaleTimeString();
  }

  clickHandler() {
    this.onClicked.emit(this.postData.id);
  }
}
