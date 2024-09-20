import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-manager',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './image-manager.component.html',
  styleUrl: './image-manager.component.css'
})
export class ImageManagerComponent {
  @Output() uploadImageEvent = new EventEmitter();

  selectedFile: File | null = null;

  onSubmit(): void{
    if (this.selectedFile) {
      const formData = new FormData();

      formData.append('image', this.selectedFile);

      // Send file to upload
      this.uploadImageEvent.emit(formData);
    }
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.selectedFile = file;
    }
  }
}
