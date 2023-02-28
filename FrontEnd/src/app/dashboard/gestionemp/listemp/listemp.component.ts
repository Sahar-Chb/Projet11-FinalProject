import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listemp',
  templateUrl: './listemp.component.html',
  styleUrls: ['./listemp.component.css']
})
export class ListempComponent implements OnInit {

  employees: any;

  constructor( private _emp:EmployeeService) { }

  ngOnInit(): void {

    this._emp.all()
      .subscribe(
        {
          next: (res) => {
            this.employees = res;
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
        
        this._emp.delete(id)
          .subscribe(
            {
              next: (res) => {
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
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