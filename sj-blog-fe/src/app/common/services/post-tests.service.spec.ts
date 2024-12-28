import { TestBed } from '@angular/core/testing';

import { PostTestsService } from './post-tests.service';

describe('PostTestsService', () => {
  let service: PostTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
