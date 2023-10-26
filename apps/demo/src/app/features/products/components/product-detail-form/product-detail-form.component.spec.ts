import { ComponentFixture, TestBed } from '@angular/core/testing';
import ProductDetailFormComponent from './product-detail-form.component';

describe('ProductDetailFormComponent', () => {
  let component: ProductDetailFormComponent;
  let fixture: ComponentFixture<ProductDetailFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductDetailFormComponent],
    });
    fixture = TestBed.createComponent(ProductDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
