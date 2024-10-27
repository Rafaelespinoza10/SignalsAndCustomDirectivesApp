import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { User, UserRequest } from '../interfaces/user-request';

@Injectable({providedIn: 'root'})
export class UserService {
  private baseUrl = 'https://reqres.in/api/users';
  private http = inject( HttpClient );

  getUserById( id: number):Observable<User>{
      return this.http.get<UserRequest>(`${ this.baseUrl }/${ id }`)
        .pipe(
          map(response => response.data),
          tap(console.log),
        )
  }

}
