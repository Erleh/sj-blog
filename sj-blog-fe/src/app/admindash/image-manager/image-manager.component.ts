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
    console.log("emitting");
    this.uploadImageEvent.emit(this.selectedFile);
  }

  onFileSelect(event: any): void {
    const file = event.target.files[0];

    // Issue with filetype being sent,
    // not a multipart request

    if (file) {
      console.log("File selected")
      this.selectedFile = file;
    }
  }
}
