import { ComponentFixture, TestBed } from '@angular/core/testing';

import LayoutHeader from './header.component';

describe('LayoutHeader', () => {
  let component: LayoutHeader;
  let fixture: ComponentFixture<LayoutHeader>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LayoutHeader],
    });
    fixture = TestBed.createComponent(LayoutHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
