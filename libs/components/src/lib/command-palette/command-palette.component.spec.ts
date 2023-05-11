import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPalette } from './command-palette.component';

describe('CommandPalette', () => {
  let component: CommandPalette;
  let fixture: ComponentFixture<CommandPalette>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommandPalette],
    });
    fixture = TestBed.createComponent(CommandPalette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
