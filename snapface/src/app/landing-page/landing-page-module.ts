import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPage } from './components/landing-page';
import { LandingPageRoutingModule } from './landing-page-routing-module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    LandingPage
  ],
  exports: [
    // Export pour pouvoir les utiliser dans d'autres modules
   LandingPage
  ]
})
export class LandingPageModule { }
