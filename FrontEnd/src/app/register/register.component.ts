import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    fullname: '',
    email: '',
    password:''
  }

  constructor( private auth:AuthService , private router:Router) { }

  ngOnInit(): void {
  }

  register() {
    this.auth.register(this.user)
      .subscribe(
        {
          next: (res) => {
            Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your account has been created',
            showConfirmButton: false,
            timer: 1500
          })
            this.router.navigate(['/login']);
          },
          error: (err) => {
            console.log(err);
            
          }
      }
    )
  }

}
