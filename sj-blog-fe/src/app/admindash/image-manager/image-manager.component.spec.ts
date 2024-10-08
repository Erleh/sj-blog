import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageManagerComponent } from './image-manager.component';

describe('ImageManagerComponent', () => {
  let component: ImageManagerComponent;
  let fixture: ComponentFixture<ImageManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
