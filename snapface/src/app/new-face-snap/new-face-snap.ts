import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup , FormBuilder , } from '@angular/forms';
import { FaceSnap } from '../models/face-snap';
import { Observable , map } from 'rxjs';
import { AsyncPipe, DatePipe, NgIf, UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FaceSnapsServices } from '../services/face-snaps';

@Component({
  selector: 'app-new-face-snap',
  imports: [ ReactiveFormsModule, UpperCasePipe, NgIf, DatePipe, AsyncPipe,],
  templateUrl: './new-face-snap.html',
  styleUrl: './new-face-snap.scss',
})
export class NewFaceSnap implements OnInit {

  // variable pour rlier le formulaire typscrip au templete
  snapForm!: FormGroup;

// observable pour visualiser les  changements de valeur du formulaire
  faceSnapPreview$!: Observable<FaceSnap>;

// expression reguliaire 
  urlRegex!: RegExp;


  constructor( private formBuilder : FormBuilder, 
    private faceSnapsService: FaceSnapsServices,
    private router: Router) {}

  ngOnInit(): void {


    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
// champs pour creer un formulaire
    this.snapForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
  }, {
    updateOn: 'blur'
});

// ONSERVER LES CHAMGEMENTS DU FORMULAIRE
  
  this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
    map(formValue => ({
        ...formValue,
        createdAt: new Date(),
        snaps: 0,
        id: 0
    }))
);
  }


// methodes pour envoyer le formulaire
  onSubmitForm() {
    this.faceSnapsService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
}


}