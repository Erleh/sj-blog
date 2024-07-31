import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthserversComponent } from './authservers.component';

describe('AuthserversComponent', () => {
  let component: AuthserversComponent;
  let fixture: ComponentFixture<AuthserversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthserversComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthserversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
