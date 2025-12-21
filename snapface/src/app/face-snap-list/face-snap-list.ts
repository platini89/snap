import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap';
import { FaceSnapsServices } from '../services/face-snaps';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit {

constructor(private facesnapservice : FaceSnapsServices) {}
  
// propriete faceSnap pour afficher la liste des snaps
faceSnaps!: FaceSnap[];

ngOnInit(): void {
  this.faceSnaps = this.facesnapservice.getFaceSnaps();
  this.faceSnaps[1].setLocation('a');
}


}
