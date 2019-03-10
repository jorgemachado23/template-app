import { TestBed, inject } from '@angular/core/testing';

import { CanActivateUserService } from './can-activate-user.service';

describe('CanActivateUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateUserService]
    });
  });

  it('should be created', inject([CanActivateUserService], (service: CanActivateUserService) => {
    expect(service).toBeTruthy();
  }));
});
