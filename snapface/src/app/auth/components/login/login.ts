import { Component, OnInit } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {


  constructor(private auth: Auth,
    private router: Router) { }

ngOnInit(): void {
}

onLogin() {
this.auth.login();
this.router.navigateByUrl('/facesnaps');
}

}
