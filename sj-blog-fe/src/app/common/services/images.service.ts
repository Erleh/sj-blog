import { Injectable } from '@angular/core';
import { ImageControllerProxyService } from '../proxies/image-controller-proxy.service';

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
}
