import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLogoSvgIconComponent } from './text-logo-svg-icon.component';

describe('TextLogoSvgIconComponent', () => {
  let component: TextLogoSvgIconComponent;
  let fixture: ComponentFixture<TextLogoSvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextLogoSvgIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextLogoSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
