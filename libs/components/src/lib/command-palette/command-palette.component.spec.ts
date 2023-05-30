import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RkCommandPalette } from './command-palette.component';

describe('CommandPalette', () => {
  let component: RkCommandPalette;
  let fixture: ComponentFixture<RkCommandPalette>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RkCommandPalette],
    });
    fixture = TestBed.createComponent(RkCommandPalette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
