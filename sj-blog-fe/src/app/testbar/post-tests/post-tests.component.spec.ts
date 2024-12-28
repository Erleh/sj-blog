import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTestsComponent } from './post-tests.component';

describe('PostTestsComponent', () => {
  let component: PostTestsComponent;
  let fixture: ComponentFixture<PostTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostTestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
