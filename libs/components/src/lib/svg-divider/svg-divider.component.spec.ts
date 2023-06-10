import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RkSvgDivider } from './svg-divider.component';

describe('SvgDividerComponent', () => {
  let component: RkSvgDivider;
  let fixture: ComponentFixture<RkSvgDivider>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RkSvgDivider],
    });
    fixture = TestBed.createComponent(RkSvgDivider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
