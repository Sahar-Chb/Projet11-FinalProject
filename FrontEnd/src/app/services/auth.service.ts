import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url = 'http://127.0.0.1:3000/admin/';

  constructor(private http: HttpClient) { }
  

  register(data: any) {
    return this.http.post(this.url + 'register', data);
    
  }

  login(data: any) {
    return this.http.post(this.url + 'login', data);
    
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }


  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  getDataFromToken() {
    let token = localStorage.getItem('token');
    if (token) {
      return JSON.parse(window.atob(token.split('.')[1]));
    }
  }
}
