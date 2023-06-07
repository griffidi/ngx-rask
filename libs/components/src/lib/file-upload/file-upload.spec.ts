import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RkFileUpload } from './file-upload';

describe('RkFileUpload', () => {
  let component: RkFileUpload;
  let fixture: ComponentFixture<RkFileUpload>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RkFileUpload],
    });
    fixture = TestBed.createComponent(RkFileUpload);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
