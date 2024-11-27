import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XSvgIconComponent } from './x-svg-icon.component';

describe('XSvgIconComponent', () => {
  let component: XSvgIconComponent;
  let fixture: ComponentFixture<XSvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XSvgIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
