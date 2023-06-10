import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RkColorOptions } from './color-options';

describe('ColorOptionsComponent', () => {
  let component: RkColorOptions;
  let fixture: ComponentFixture<RkColorOptions>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RkColorOptions],
    });
    fixture = TestBed.createComponent(RkColorOptions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
