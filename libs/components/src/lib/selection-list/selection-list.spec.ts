import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RkSelectionList } from './selection-list';

describe('SelectComponent', () => {
  let component: RkSelectionList;
  let fixture: ComponentFixture<RkSelectionList>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RkSelectionList],
    });
    fixture = TestBed.createComponent(RkSelectionList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
