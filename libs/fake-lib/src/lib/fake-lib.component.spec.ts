import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLibComponent } from './fake-lib.component';

describe('FakeLibComponent', () => {
  let component: FakeLibComponent;
  let fixture: ComponentFixture<FakeLibComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeLibComponent]
    });
    fixture = TestBed.createComponent(FakeLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
