import { TestBed } from '@angular/core/testing';

import { RuService } from './ru.service';

describe('RuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuService = TestBed.get(RuService);
    expect(service).toBeTruthy();
  });
});
