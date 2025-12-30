import { Routes } from '@angular/router';
import { FaceSnapList } from './components/face-snap-list/face-snap-list';
import { NewFaceSnap } from './components/new-face-snap/new-face-snap';
import { singleFaceSnapComponent } from './components/single-face-snap/single-face-snap';
import { AuthGuard } from '../core/guards/auth.guard';

export const faceSnapsRoutes: Routes = [
  { path: '', component: FaceSnapList, canActivate: [AuthGuard]  },
  { path: 'create', component: NewFaceSnap ,canActivate: [AuthGuard]  },
  { path: ':id', component: singleFaceSnapComponent ,canActivate: [AuthGuard] }
];

