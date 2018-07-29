import { TestBed, async, inject } from '@angular/core/testing';

import { RoleVerifyGuard } from './role-verify.guard';

describe('RoleVerifyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleVerifyGuard]
    });
  });

  it('should ...', inject([RoleVerifyGuard], (guard: RoleVerifyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
