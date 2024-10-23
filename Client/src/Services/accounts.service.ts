import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../Models/user';
import { signal } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  private http = inject(HttpClient)

  baseUrl = "https://localhost:7264/api/";

  currentUser = signal<User | null>(null);

  login(model: any) {
    return this.http.post<User>(this.baseUrl +"Account/login",  model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl +"Account/register", model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user);
        }
        return user;
      })
    );
  
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);
  }
}
