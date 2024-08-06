import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAuthRedirectComponent } from './google-auth-redirect.component';

describe('GoogleAuthRedirectComponent', () => {
  let component: GoogleAuthRedirectComponent;
  let fixture: ComponentFixture<GoogleAuthRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleAuthRedirectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleAuthRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
