import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrefComponent } from './postref.component';

describe('PostrefComponent', () => {
  let component: PostrefComponent;
  let fixture: ComponentFixture<PostrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostrefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
