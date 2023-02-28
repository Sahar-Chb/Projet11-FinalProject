import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createemp',
  templateUrl: './createemp.component.html',
  styleUrls: ['./createemp.component.css']
})
export class CreateempComponent implements OnInit {

  name: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  lastname: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  email: FormControl = new FormControl('', [
    Validators.required,
  ]);

  tel: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  address: FormControl = new FormControl('', [
    Validators.required,
  ]);
  

  deps: any;

  employee = {
    name: '',
    lastname: '',
    email: '',
    tel: '',
    address: '',
    idDep:''
  }

  image: any;

  selectImage(e: any) {
    this.image = e.target.files[0];
  }

  constructor(private _dep: DepartmentService, private _emp: EmployeeService, private router: Router) { 
  }

  ngOnInit(): void {
    this._dep.all()
      .subscribe(
        {
          next: (res) => {
            this.deps = res;
            
          },
          error: (err) => {
            console.log(err);
            
          }
        }
      
    )
  }

  create() {
    let fd = new FormData;
    fd.append('name', this.employee.name);
    fd.append('lastname', this.employee.lastname);
    fd.append('email', this.employee.email);
    fd.append('tel', this.employee.tel);
    fd.append('address', this.employee.address);
    fd.append('idDep', this.employee.idDep);
    fd.append('image', this.image);


    this._emp.create(fd)
      .subscribe(
        {
          next: (res) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
            this.router.navigate(['/dashboard/gestionemployee/list']);
            
        },
          error: (err) => {
            console.log(err);
            
          }
      }
    )
  }


}
