import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RkSelect } from './select.component';

describe('SelectComponent', () => {
  let component: RkSelect;
  let fixture: ComponentFixture<RkSelect>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RkSelect],
    });
    fixture = TestBed.createComponent(RkSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
