import { TestBed } from '@angular/core/testing';

import { DefaultApiService } from './default-api.service';

describe('DefaultApiService', () => {
  let service: DefaultApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
