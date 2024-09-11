import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { PostListingDto } from '../../../common/dtos/PostListingDto';

@Component({
  selector: 'app-postref',
  standalone: true,
  imports: [],
  templateUrl: './postref.component.html',
  styleUrl: './postref.component.css'
})
export class PostrefComponent implements OnInit, OnChanges{
  @Input({
    required: true
  }) postData!: PostListingDto;
  @Input() isSelected: boolean = false;

  @Output() onSelect = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  date: string = "";

  shouldConfirmDeletion: boolean = false;
  
  ngOnInit(): void {
    this.date = new Date(this.postData.creationDate).toLocaleDateString();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.isSelected) {
      this.shouldConfirmDeletion = false;
    }
  }

  handleSelection() {
    this.onSelect.emit();
  }

  handleConfirmDeletion() {
    this.shouldConfirmDeletion = true;
  }

  confirmDeletion() {
    this.onDelete.emit();
  }

  cancelDeletion() {
    this.shouldConfirmDeletion = false;
  }
}
