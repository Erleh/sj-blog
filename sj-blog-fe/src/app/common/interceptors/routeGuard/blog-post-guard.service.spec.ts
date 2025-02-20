import { TestBed } from '@angular/core/testing';

import { BlogPostGuardService } from './blog-post-guard.service';

describe('BlogPostGuardService', () => {
  let service: BlogPostGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPostGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
