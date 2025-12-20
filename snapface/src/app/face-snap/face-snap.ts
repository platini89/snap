import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [ NgStyle, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent  implements OnInit {

  // propriete pour recuperer le facesnap
  @Input() faceSnap!: FaceSnap;


  // creation des proprietes d'un facesnap

  snapButtonText!: string;
  userHasSnapped!: boolean;


  // initialisation ou attribution des valeur aux facesnaps
  ngOnInit(): void {

    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

// methode pour incrementer le nombre de snaps
onSnap(): void {
  if (this.userHasSnapped) {
    this.unSnap();
  } else {
    this.snap();
  }
}

unSnap() {
  this.faceSnap.removeSnap();
  this.snapButtonText = 'Oh Snap!';
  this.userHasSnapped = false;
}

snap() {
  this.faceSnap.addSnap();
  this.snapButtonText = 'Oops, unSnap!';
  this.userHasSnapped = true;
}
}
