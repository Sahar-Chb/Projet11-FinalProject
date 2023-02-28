import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editemp',
  templateUrl: './editemp.component.html',
  styleUrls: ['./editemp.component.css']
})
export class EditempComponent implements OnInit {

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
  id: any;

  employee: any;

  image: any;
  selectImage(e: any) { 
    this.image = e.target.files[0];
  }


  constructor( private _dep:DepartmentService , private _act:ActivatedRoute, private _emp:EmployeeService , private router:Router)  { }

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

    this.id = this._act.snapshot.paramMap.get('id');

    this._emp.byid(this.id)
      .subscribe(
        {
          next: (res) => {
            this.employee = res;
            
        },
          error: (err) => {
            console.log(err); 
          }
      }
    )
    
  }

  save() {
    let fd = new FormData;
    fd.append('name', this.employee.name);
    fd.append('lastname', this.employee.lastname);
    fd.append('email', this.employee.email);
    fd.append('tel', this.employee.tel);
    fd.append('address', this.employee.address);
    fd.append('idDep', this.employee.idDep);
    
    if (this.image) {
      fd.append('image', this.image);
    } else {
      fd.append('image', this.employee.image);
    }

    this._emp.update( this.id , fd )
      .subscribe(
        {
          next: (_res) => {
           Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your employee has been updated',
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
