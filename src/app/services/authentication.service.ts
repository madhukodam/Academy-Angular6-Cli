import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { UserDetails } from '../models/user';

@Injectable()
export class AuthenticationService {
    user: UserDetails;
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        // tslint:disable-next-line:object-literal-shorthand
        return this.http.post<any>(`${environment.apiUrl}/userAuthenticate`, { loginId: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.userId) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}