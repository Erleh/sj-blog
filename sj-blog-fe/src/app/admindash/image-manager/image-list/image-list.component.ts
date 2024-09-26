import { Component } from '@angular/core';
import { ImagesService } from '../../../common/services/images.service';
import { ImagePathListDto } from '../../../common/dtos/ImagePathListDto';
import { ImagePathDto } from '../../../common/dtos/ImagePathDto';
import { environment } from '../../../../environments/environments';
import { ImageComponent } from './image/image.component';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css'
})
export class ImageListComponent {
  imgSrcBaseUrl: string = environment.apiUrl;

  page: number = 1;
  maxImages: number = 6;
  hasNext: boolean = false;
  hasPrevious: boolean = false;

  // Raw image source from backend
  imageListDto!: ImagePathListDto;
  imageList: ImagePathDto[] = [];

  // Image sources for display
  imageSrc: ImagePathDto[] = [];

  // User selected image
  selectedImage!: ImagePathDto;

  constructor (
    private imagesService: ImagesService
  ) {
    this.loadImages();
  }

  loadImages() {
    // Clear old list
    this.imageSrc = [];

    // Retrieve image paths
    this.imagesService.getImagePathList(this.page).subscribe(imagePathList => {
      this.imageListDto = imagePathList;

      this.imageList = imagePathList.images;

      this.createSourceList();
    });
  }

  createSourceList() {
    for (let image of this.imageList) {
      this.imageSrc.push({
        id: image.id,
        path: `${this.imgSrcBaseUrl}/public/uploads/${image.path}`
      });
    }
  }

  handleImageSelection(selectedImage: ImagePathDto) {
    this.selectedImage = selectedImage;
  }

  onNextPage() {
    this.page++;

    this.loadImages();
  }

  onPrevPage() {
    if (this.page <= 1) {
      return;
    }

    this.page--;

    this.loadImages();
  }
}
