import {Injectable} from '@angular/core';
import * as auth0 from 'auth0-js';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;
  userProfile: any;
  auth0;

  constructor(public router: Router) {
    this._idToken = '';
    this._accessToken = '';
    this._expiresAt = 0;
    this.initializeAuth0();
  }

  get accessToken(): string {
    return this._accessToken;
  }

  get idToken(): string {
    return this._idToken;
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.userProfile = authResult.idTokenPayload;
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });

  }

  private initializeAuth0(): void {
    this.auth0 = new auth0.WebAuth({
      clientID: '7snPSL15XykPMedjCMwYR2MSDJQy2n7Y',
      domain: 'jorge-testing.eu.auth0.com',
      responseType: 'token id_token',
      redirectUri: 'http://localhost:4200/callback',
      scope: 'openid profile'
    });
  }

  private localLogin(authResult): void {
    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    // Set the time that the access token will expire at
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 2);
    const expiresAt = currentDate.getTime();
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
  }

  public renewTokens(): void {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    this._accessToken = '';
    this._idToken = '';
    this._expiresAt = 0;
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return new Date().getTime() < this._expiresAt;
  }

}
