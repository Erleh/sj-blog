import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../../common/services/images.service';
import { ImagePathListDto } from '../../../common/dtos/ImagePathListDto';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [],
  templateUrl: './image-list.component.html',
  styleUrl: './image-list.component.css'
})
export class ImageListComponent {
  page: number = 1;
  maxImages: number = 6;
  hasNext: boolean = false;
  hasPrevious: boolean = false;

  imageList!: ImagePathListDto;

  constructor (
    private imagesService: ImagesService
  ) {
      // Retrieve image paths
      this.imagesService.getImagePathList(this.page).subscribe(imagePathList => {
        this.imageList = imagePathList;
        console.log("imageList " + this.imageList.images[0].path);
      });
  }
}
