import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLogoSvgIconComponent } from './full-logo-svg-icon.component';

describe('FullLogoSvgIconComponent', () => {
  let component: FullLogoSvgIconComponent;
  let fixture: ComponentFixture<FullLogoSvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullLogoSvgIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullLogoSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
