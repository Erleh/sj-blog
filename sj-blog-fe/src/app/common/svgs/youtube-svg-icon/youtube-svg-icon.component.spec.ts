import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSvgIconComponent } from './youtube-svg-icon.component';

describe('YoutubeSvgIconComponent', () => {
  let component: YoutubeSvgIconComponent;
  let fixture: ComponentFixture<YoutubeSvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeSvgIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
