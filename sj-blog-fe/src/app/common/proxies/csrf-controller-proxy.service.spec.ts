import { TestBed } from '@angular/core/testing';

import { CsrfControllerProxyService } from './csrf-controller-proxy.service';

describe('CsrfControllerProxyService', () => {
  let service: CsrfControllerProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsrfControllerProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
