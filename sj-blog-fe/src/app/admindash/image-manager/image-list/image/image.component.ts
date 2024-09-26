import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ImagePathDto } from '../../../../common/dtos/ImagePathDto';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  @Input({
    required: true
  }) imagePathDtoRef !: ImagePathDto
  @Input({
    required: true
  }) isSelected: boolean = false;

  @Output() onSelectImage = new EventEmitter();

  shouldConfirmDeletion: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.isSelected) {
      this.shouldConfirmDeletion = false;
    }
  }

  onSelect() {
    this.onSelectImage.emit(this.imagePathDtoRef);
  }

  handleConfirmDeletion() {
    this.shouldConfirmDeletion = true;
  }

  confirmDeletion() {

  }

  cancelDeletion() {
    this.shouldConfirmDeletion = false;
  }
}
