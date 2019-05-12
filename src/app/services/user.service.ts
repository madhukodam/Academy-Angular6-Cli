import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = `${environment.apiUrl}/users/`;
 
  constructor(private http: HttpClient) { }
 // tslint:disable-next-line:no-trailing-whitespace
 
  // tslint:disable-next-line:ban-types
  getUser(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 // tslint:disable-next-line:no-trailing-whitespace
 
  // tslint:disable-next-line:ban-types
  createUser(User: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, User);
  }
 // tslint:disable-next-line:no-trailing-whitespace
 
  // tslint:disable-next-line:ban-types
  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 // tslint:disable-next-line:no-trailing-whitespace
 
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  // tslint:disable-next-line:no-trailing-whitespace

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // tslint:disable-next-line:no-trailing-whitespace

 
}
