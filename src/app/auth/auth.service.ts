import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from './user.model';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiKey = 'AIzaSyDZd4vFQSzq-VRUzvSVYcYAMEXiW7e1Sj4';
  signUpEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
  signInEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;
  user = new Subject<User>();

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      this.signUpEndpoint,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  signIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      this.signInEndpoint,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn* 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }
}
