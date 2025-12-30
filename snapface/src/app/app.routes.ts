import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/components/landing-page';
import { Login } from './auth/components/login/login';

export const routes: Routes = [
    {
      path: 'facesnaps',
      loadChildren: () => import('./face-snaps/face-snaps.routes').then(m => m.faceSnapsRoutes)
    },
    { path: '', component: LandingPage },
    { path: 'auth/login', component: Login }
];
