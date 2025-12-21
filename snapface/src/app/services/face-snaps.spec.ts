import { TestBed } from '@angular/core/testing';

import { FaceSnaps } from './face-snaps';

describe('FaceSnaps', () => {
  let service: FaceSnaps;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceSnaps);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
