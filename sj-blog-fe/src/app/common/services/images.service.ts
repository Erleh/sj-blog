import { Injectable } from '@angular/core';
import { ImageControllerProxyService } from '../proxies/image-controller-proxy.service';
import { ImagePathListDto } from '../dtos/ImagePathListDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(
    private imageControllerProxy: ImageControllerProxyService
  ) { }

  saveImageFile(file: any) {
    // Check if file exists
    if (file === null) {
      return;
    }

    this.imageControllerProxy.saveImage(file);
  }

  getImagePathList(page: number): Observable<ImagePathListDto> {
    return this.imageControllerProxy.retrieveImageList(page);
  }
}
