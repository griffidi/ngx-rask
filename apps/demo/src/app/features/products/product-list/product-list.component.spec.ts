import { ComponentFixture, TestBed } from '@angular/core/testing';

import ProductList from './product-list.component';

describe('ProductList', () => {
  let component: ProductList;
  let fixture: ComponentFixture<ProductList>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductList],
    });
    fixture = TestBed.createComponent(ProductList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
