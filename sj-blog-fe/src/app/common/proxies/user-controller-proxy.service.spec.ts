import { TestBed } from '@angular/core/testing';

import { UserControllerProxyService } from './user-controller-proxy.service';

describe('UserControllerProxyService', () => {
  let service: UserControllerProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserControllerProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
