import { Component, OnInit,  } from '@angular/core';
import { Headercomponent } from './core/components/header/header';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Headercomponent, RouterOutlet ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {



}
