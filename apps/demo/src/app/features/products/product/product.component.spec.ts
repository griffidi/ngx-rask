import { ComponentFixture, TestBed } from '@angular/core/testing';

import Product from './product.component';

describe('Product', () => {
  let component: Product;
  let fixture: ComponentFixture<Product>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Product],
    });
    fixture = TestBed.createComponent(Product);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
