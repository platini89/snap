import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import des composants
import { FaceSnapComponent } from './components/face-snap/face-snap';
import { FaceSnapList } from './components/face-snap-list/face-snap-list';
import { NewFaceSnap } from './components/new-face-snap/new-face-snap';
import { singleFaceSnapComponent } from './components/single-face-snap/single-face-snap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Import des composants standalone
    FaceSnapComponent,
    FaceSnapList,
    NewFaceSnap,
    singleFaceSnapComponent
  ],
  exports: [
    // Export pour pouvoir les utiliser dans d'autres modules
    FaceSnapComponent,
    FaceSnapList,
    NewFaceSnap,
    singleFaceSnapComponent
  ]
})
export class FaceSnapsModule { }
