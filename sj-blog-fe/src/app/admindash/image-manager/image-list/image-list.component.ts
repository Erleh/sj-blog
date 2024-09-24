import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../../common/services/images.service';
import { ImagePathListDto } from '../../../common/dtos/ImagePathListDto';
import { ImagePathDto } from '../../../common/dtos/ImagePathDto';
import { environment } from '../../../../environments/environments';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [],
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

  constructor (
    private imagesService: ImagesService
  ) {
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
      // Image id is currently not unique, check reasons
      //
      //
      //
      console.log(image.id);
      this.imageSrc.push({
        id: image.id,
        path: `${this.imgSrcBaseUrl}/public/uploads/${image.path}`
      });
    }
  }
}
