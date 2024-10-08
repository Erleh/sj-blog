import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbarComponent } from './testbar.component';

describe('TestbarComponent', () => {
  let component: TestbarComponent;
  let fixture: ComponentFixture<TestbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
