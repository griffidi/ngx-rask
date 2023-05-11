import { ComponentFixture, TestBed } from '@angular/core/testing';

import EmployeeList from './employee-list.component';

describe('EmployeeList', () => {
  let component: EmployeeList;
  let fixture: ComponentFixture<EmployeeList>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EmployeeList],
    });
    fixture = TestBed.createComponent(EmployeeList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
