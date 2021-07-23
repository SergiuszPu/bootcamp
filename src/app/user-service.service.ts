import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from './user'
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchParams } from './interface/searchParams';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _users = new BehaviorSubject<User[]>([])
  public users$ = this._users.asObservable()

  constructor(private http: HttpClient) { }

  usersUrl: string = "http://localhost:3000/users"

  getUsers(): void {
    this.http.get<User[]>(this.usersUrl).subscribe(data => this._users.next(data))
  }
  getUser(id: number): Observable<User> {
    // console.log('deail id', id);
    
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url)
  }
  getUserByEmail(email: string) {
    return this.http.get<User[]>(`${this.usersUrl}?email=${email}`)
  }
  headers = new HttpHeaders().append('header', 'value');
  // params = new HttpParams().append('param', 'value');

  getUserByParams(params: SearchParams) {
    const httpParams: Record<string, unknown> = {};

    let search = new HttpParams();
    
    // params.append("someParamKey", this.someParamValue)
    Object.entries(params).forEach(([key, value]) => {
      console.log('value', value);
      search.append(key, value)
      if (value) {
        // console.log('boss');
        
        search.append(key, value)
        
        
      }
      console.log(search);
    })
    
    
    return this.http.get<User[]>(this.usersUrl, { params: search }).subscribe(data => this._users.next(data))
    // return this.http.get<User[]>(`${this.usersUrl}?email=${params.email}&type=${params.type}&date_gte=${params.dateFrom}&date_late=${params.dateTo}`)
    //   .subscribe(data => this._users.next(data))
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions)
  }

  deleteUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, this.httpOptions)
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
}

// http://localhost:3000/users?date_gte=1996.01.01&date_lte=2005.01.01
// localhost:3000/users?email=sergio@gmail.com&type=worker&date_gte=1984.01.01&date_lte=1999.01.01