import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsServices } from '../services/face-snaps';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [ NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class singleFaceSnapComponent  implements OnInit {


  constructor(private faceSnapsService:FaceSnapsServices,
              private route: ActivatedRoute
  ) {}

  // propriete pour recuperer le facesnap par id
   faceSnap!: FaceSnap;


  // creation des proprietes d'un facesnap

  snapButtonText!: string;
  userHasSnapped!: boolean;


  // initialisation ou attribution des valeur aux facesnaps
  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
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
  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
  this.snapButtonText = 'Oh Snap!';
  this.userHasSnapped = false;
}

snap() {
  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
  this.snapButtonText = 'Oops, unSnap!';
  this.userHasSnapped = true;
}


// methode pour snap
private prepareInterface() {
  this.snapButtonText = 'Oh Snap!';
  this.userHasSnapped = false;
}


// methode pour recupere un id element
private getFaceSnap() {
  const faceSnapId = this.route.snapshot.params['id'];
  this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
}

}
