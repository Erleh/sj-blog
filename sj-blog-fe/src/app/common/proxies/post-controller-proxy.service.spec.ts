import { TestBed } from '@angular/core/testing';

import { PostControllerProxyService } from './post-controller-proxy.service';

describe('PostControllerProxyService', () => {
  let service: PostControllerProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostControllerProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
