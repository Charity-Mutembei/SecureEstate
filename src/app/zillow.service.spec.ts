import { TestBed } from '@angular/core/testing';

import { ZillowService } from './zillow.service';

describe('ZillowService', () => {
  let service: ZillowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZillowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
