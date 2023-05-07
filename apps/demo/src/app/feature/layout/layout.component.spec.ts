import { ComponentFixture, TestBed } from '@angular/core/testing';

import Layout from './layout.component';

describe('Layout', () => {
  let component: Layout;
  let fixture: ComponentFixture<Layout>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Layout],
    });
    fixture = TestBed.createComponent(Layout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
