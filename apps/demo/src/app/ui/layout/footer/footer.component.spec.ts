import { ComponentFixture, TestBed } from '@angular/core/testing';

import LayoutFooter from './footer.component';

describe('LayoutFooter', () => {
  let component: LayoutFooter;
  let fixture: ComponentFixture<LayoutFooter>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LayoutFooter],
    });
    fixture = TestBed.createComponent(LayoutFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
