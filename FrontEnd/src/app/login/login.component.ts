import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password:''
  }

  constructor( private auth:AuthService , private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.user)
      .subscribe(
        {
          next: (res) => {

            let token :any = res;
            localStorage.setItem('token', token.mytoken);

            this.router.navigate(['/dashboard']);

          },
          error: (err) => {
            console.log(err);
            
          }
      }
    )
  }

}
