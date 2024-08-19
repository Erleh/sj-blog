import { TestBed } from '@angular/core/testing';

import { CanShowCreateAccountService } from './can-show-create-account.service';

describe('CanShowCreateAccountService', () => {
  let service: CanShowCreateAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanShowCreateAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
