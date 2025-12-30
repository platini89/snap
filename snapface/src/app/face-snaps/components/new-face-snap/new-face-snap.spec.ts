import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFaceSnap } from './new-face-snap';

describe('NewFaceSnap', () => {
  let component: NewFaceSnap;
  let fixture: ComponentFixture<NewFaceSnap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewFaceSnap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFaceSnap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
