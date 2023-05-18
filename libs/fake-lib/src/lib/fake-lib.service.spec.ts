import { TestBed } from '@angular/core/testing';

import { FakeLibService } from './fake-lib.service';

describe('FakeLibService', () => {
  let service: FakeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
