import { TestBed } from '@angular/core/testing';

import { GoogleAuthControllerProxyService } from './google-auth-controller-proxy.service';

describe('GoogleAuthControllerProxyService', () => {
  let service: GoogleAuthControllerProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleAuthControllerProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
