import { TestBed } from '@angular/core/testing';

import { Contractorsservice } from './contractors.service';

describe('CrmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Contractorsservice = TestBed.get(Contractorsservice);
    expect(service).toBeTruthy();
  });
});
