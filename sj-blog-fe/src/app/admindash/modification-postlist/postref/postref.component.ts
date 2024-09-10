import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostListingDto } from '../../../common/dtos/PostListingDto';

@Component({
  selector: 'app-postref',
  standalone: true,
  imports: [],
  templateUrl: './postref.component.html',
  styleUrl: './postref.component.css'
})
export class PostrefComponent implements OnInit{
  @Input({
    required: true
  }) postData!: PostListingDto;
  @Input() isSelected: boolean = false;

  @Output() onSelect = new EventEmitter();

  date: string = "";
  
  ngOnInit(): void {
    this.date = new Date(this.postData.creationDate).toLocaleDateString();
  }

  handleClick() {
    this.onSelect.emit();
  }
}
