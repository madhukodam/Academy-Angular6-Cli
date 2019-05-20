import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private baseUrl = `${environment.apiUrl}`;


  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:ban-types
  getBranch(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}` + `/getBranch/${id}`);
  }

  // tslint:disable-next-line:ban-types
  createBranch(branch: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/createBranch`, branch);
  }

  // tslint:disable-next-line:ban-types
  updateBranch(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteBranch(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/deleteBranch/${id}`);
  }

  getBranchsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/branchListDetails`).pipe(catchError(this.handleError));
  }

  getDeptList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/deptListDetails`);
  }
  getInstList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/instListDetails`);
  }
  private handleError(errorResponse: HttpErrorResponse) {
    let errMsg = '';
    // Client Side Error
    if (errorResponse.error instanceof ErrorEvent) {
      errMsg = `Error: ${errorResponse.error.message}`;
    } else {  // Server Side Error
      errMsg = `Error Code: ${errorResponse.status},  Message: ${errorResponse.message}`;
    }
    // return an observable
    return throwError(errMsg);
  }


}
