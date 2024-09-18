import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageControllerProxyService {
  constructor(
    private httpClient: HttpClient
  ) { }

  saveImage(file: File) {
    this.httpClient.post(
      `${environment.apiUrl}/api/upload_image`,
      {
        file
      }
    );
  }

  retrieveImageList() {

  }

  deleteImage() {

  }
}
