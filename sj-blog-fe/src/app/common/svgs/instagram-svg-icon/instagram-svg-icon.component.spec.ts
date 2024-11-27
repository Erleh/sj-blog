import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramSvgIconComponent } from './instagram-svg-icon.component';

describe('InstagramSvgIconComponent', () => {
  let component: InstagramSvgIconComponent;
  let fixture: ComponentFixture<InstagramSvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramSvgIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstagramSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
