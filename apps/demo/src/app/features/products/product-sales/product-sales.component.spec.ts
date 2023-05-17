import { ComponentFixture, TestBed } from '@angular/core/testing';

import ProductSales from './product-sales.component';

describe('ProductSales', () => {
  let component: ProductSales;
  let fixture: ComponentFixture<ProductSales>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductSales],
    });
    fixture = TestBed.createComponent(ProductSales);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
