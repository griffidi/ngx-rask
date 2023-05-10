import { TestBed, type ComponentFixture } from '@angular/core/testing';

import Login from './login.component';

describe('LoginComponent', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Login],
    });
    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
