import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { AsyncPipe, DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsServices } from '../../../core/services/face-snaps';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-face-snap',
  imports: [ NgStyle, NgClass, UpperCasePipe, DatePipe, RouterLink, AsyncPipe,
              CommonModule
  ],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class singleFaceSnapComponent  implements OnInit {


  constructor(private faceSnapsService:FaceSnapsServices,
              private route: ActivatedRoute
  ) {}

  // propriete pour recuperer le facesnap par id
  faceSnap$!: Observable<FaceSnap>;


  // creation des proprietes d'un facesnap

  snapButtonText!: string;
  userHasSnapped!: boolean;


  // initialisation ou attribution des valeur aux facesnaps
  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }







// methode pour incrementer le nombre de snaps
// ...
onSnap(faceSnapId: number | string) {
  const idAsString = String(faceSnapId);
  if (this.snapButtonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(idAsString, 'snap').pipe(
          tap(() => this.snapButtonText = 'Oops, unSnap!')
      );
  } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(idAsString, 'unsnap').pipe(
          tap(() => this.snapButtonText = 'Oh Snap!')
      );
  }
}
// ...


// methode pour snap
private prepareInterface() {
  this.snapButtonText = 'Oh Snap!';
  this.userHasSnapped = false;
}


// methode pour recupere un id element
private getFaceSnap() {
  const faceSnapId = this.route.snapshot.params['id'];
  this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
}

}
