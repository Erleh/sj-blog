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

    console.log("saving image");
    console.log(file);
    this.imageControllerProxy.saveImage(file);
  }
}
