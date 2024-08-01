import { TestBed } from '@angular/core/testing';

import { GetTestsService } from './get-tests.service';

describe('GetTestsService', () => {
  let service: GetTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
