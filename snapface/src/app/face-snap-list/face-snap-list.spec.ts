import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapList } from './face-snap-list';

describe('FaceSnapList', () => {
  let component: FaceSnapList;
  let fixture: ComponentFixture<FaceSnapList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaceSnapList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceSnapList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
