import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RkBreadcrumbs } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: RkBreadcrumbs;
  let fixture: ComponentFixture<RkBreadcrumbs>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RkBreadcrumbs],
    });
    fixture = TestBed.createComponent(RkBreadcrumbs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
