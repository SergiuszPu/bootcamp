import { TestBed } from '@angular/core/testing';

import { UsersAPIService } from './user-api.service';

describe('UserServiceService', () => {
  let service: UsersAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
