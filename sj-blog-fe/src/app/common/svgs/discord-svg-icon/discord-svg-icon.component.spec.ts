import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordSvgIconComponent } from './discord-svg-icon.component';

describe('DiscordSvgIconComponent', () => {
  let component: DiscordSvgIconComponent;
  let fixture: ComponentFixture<DiscordSvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscordSvgIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
