import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listdep',
  templateUrl: './listdep.component.html',
  styleUrls: ['./listdep.component.css']
})
export class ListdepComponent implements OnInit {
  deps: any;

  constructor(private _dep: DepartmentService , private router:Router) { }

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

  delete(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this._dep.delete(id)
          .subscribe(
            {
              next: (res) => {
                this.ngOnInit();
                
              },
              error: (err) => {
                console.log(err);
                
              }
            }
          )
    
      }
    })
  }
}
