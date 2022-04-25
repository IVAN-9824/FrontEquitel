import { TestBed } from '@angular/core/testing';

import { TieneService } from './tiene.service';

describe('TieneService', () => {
  let service: TieneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TieneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
