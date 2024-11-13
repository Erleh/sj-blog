import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSvgIconComponent } from './logo-svg-icon.component';

describe('LogoSvgIconComponent', () => {
  let component: LogoSvgIconComponent;
  let fixture: ComponentFixture<LogoSvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoSvgIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
