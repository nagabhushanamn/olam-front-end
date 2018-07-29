import { TestBed, async, inject } from '@angular/core/testing';

import { CurrentStateGuard } from './current-state.guard';

describe('CurrentStateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentStateGuard]
    });
  });

  it('should ...', inject([CurrentStateGuard], (guard: CurrentStateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
