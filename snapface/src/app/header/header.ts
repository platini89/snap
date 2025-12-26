import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Headercomponent {

  constructor( private router: Router ){}



  onAddNewFaceSnap() {
    this.router.navigateByUrl('/create');
  }

}
