import { TestBed } from '@angular/core/testing';

import { CanAdminAccessService } from './can-admin-access.service';

describe('CanAdminAccessService', () => {
  let service: CanAdminAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanAdminAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
