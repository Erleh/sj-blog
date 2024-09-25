import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  }) imgSrc !: string;

  @Output() onSelectImage = new EventEmitter();

  isSelected: boolean = false;

  onSelect() {
    this.onSelectImage.emit();
  }
}
