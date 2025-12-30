import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-face-snap',
  imports: [  UpperCasePipe, ],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent  {



  // propriete pour recuperer le facesnap
  @Input() faceSnap!: FaceSnap;


  constructor(private router: Router) {}

  // methode pour acceder au id element
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }



}
