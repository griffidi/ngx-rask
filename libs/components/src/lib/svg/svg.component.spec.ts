import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RkSvg } from './svg.component';

describe('SvgComponent', () => {
  let component: RkSvg;
  let fixture: ComponentFixture<RkSvg>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RkSvg],
    });
    fixture = TestBed.createComponent(RkSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
