import { TestBed } from '@angular/core/testing';

import { FaceSnap } from '../models/face-snap';

describe('FaceSnaps', () => {
  let service: FaceSnap;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaceSnap);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
