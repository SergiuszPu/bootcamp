import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from './user'
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchParams } from './modal/search-params.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly _users = new BehaviorSubject<User[]>([])
  public users$ = this._users.asObservable()

  constructor(private http: HttpClient) { }

  usersUrl: string = "http://localhost:3000/users"

  loadUsers(): void {
   this.getUsers().subscribe(data => this._users.next(data))
  }

  getUsers() {
    return this.http.get<User[]>(this.usersUrl)
  }
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url)
  }
  getUserByEmail(email: string) {
    return this.http.get<User[]>(`${this.usersUrl}?email=${email}`)
  }
  headers = new HttpHeaders().append('header', 'value');

  getUserByParams(params: SearchParams) {

    let search = new HttpParams();

    Object.entries(params).forEach(([key, value]) => {
        if(value.length > 0) {
          search =  search.append(key, value)
        }
    })
    return this.http.get<User[]>(this.usersUrl, { params: search }).subscribe(data => this._users.next(data))
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
