import { Component, OnInit,  } from '@angular/core';
import { FaceSnapList } from './face-snap-list/face-snap-list';
import { Headercomponent } from './header/header';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapList, Headercomponent ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App  {



}
