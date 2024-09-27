import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { ImagePathListDto } from '../dtos/ImagePathListDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageControllerProxyService {
  maxImages:number = 7;

  constructor(
    private httpClient: HttpClient
  ) { }

  saveImage(file: File) {
    this.httpClient.post(
      `${environment.apiUrl}/api/upload_image`, 
      file
    ).subscribe();
  }

  retrieveImageList(page: number): Observable<ImagePathListDto>{
    return this.httpClient.get<ImagePathListDto>(
      `${environment.apiUrl}/api/get_image_list`,
      {
        params: {
          page,
          size: this.maxImages
        }
      }
    );
  }

  deleteImage(id: number) {
    return this.httpClient.delete(
      `${environment.apiUrl}/api/delete_image`,
      {
        params: {
          id
        }
      }
    );
  }
}
