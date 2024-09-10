import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationPostlistComponent } from './modification-postlist.component';

describe('ModificationPostlistComponent', () => {
  let component: ModificationPostlistComponent;
  let fixture: ComponentFixture<ModificationPostlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificationPostlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificationPostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
