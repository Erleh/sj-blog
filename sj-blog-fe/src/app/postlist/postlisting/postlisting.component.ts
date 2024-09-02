import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostListingDto } from '../../common/dtos/PostListingDto';

@Component({
  selector: 'app-postlisting',
  standalone: true,
  imports: [],
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
    this.date = dateString.toLocaleDateString();
  }

  clickHandler() {
    console.log("clicked " + this.postData.id);
    this.onClicked.emit(this.postData.id);
  }
}
