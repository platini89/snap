import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap';
import { FaceSnapsServices } from '../../../core/services/face-snaps';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent, AsyncPipe, CommonModule ],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapList implements OnInit {

constructor(private facesnapservice : FaceSnapsServices) {}

// propriete faceSnap pour afficher la liste des snaps
//faceSnaps!: FaceSnap[];
faceSnaps$!: Observable<FaceSnap[]>;

ngOnInit(): void {
  this.faceSnaps$ = this.facesnapservice.getAllFaceSnaps();
 // this.faceSnaps$[1].setLocation('a');
}


}
