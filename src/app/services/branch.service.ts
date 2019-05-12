import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
  createBranch(Branch: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, Branch);
  }
 
  // tslint:disable-next-line:ban-types
  updateBranch(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteBranch(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getBranchsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/branchListDetails`);
  }
 

 

}
