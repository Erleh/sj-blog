import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleSvgIconComponent } from './google-svg-icon.component';

describe('GoogleSvgIconComponent', () => {
  let component: GoogleSvgIconComponent;
  let fixture: ComponentFixture<GoogleSvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleSvgIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
