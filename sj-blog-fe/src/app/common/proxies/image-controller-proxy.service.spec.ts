import { TestBed } from '@angular/core/testing';

import { ImageControllerProxyService } from './image-controller-proxy.service';

describe('ImageControllerProxyService', () => {
  let service: ImageControllerProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageControllerProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
