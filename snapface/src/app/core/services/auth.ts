import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

// simulee un faut token
private token!: string;

login() {
  this.token = 'MyFakeToken';
}

  // methode pour simulee
  getToken(): string {
    return this.token;
  }

}
