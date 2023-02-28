import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-editdep',
  templateUrl: './editdep.component.html',
  styleUrls: ['./editdep.component.css']
})
export class EditdepComponent implements OnInit {

  name: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  description: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(30),
  ]);

  etage: FormControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(6),
  ]);

  salle: FormControl = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(20),
  ]);


  id: any;
  dep: any;

  constructor( private act:ActivatedRoute , private _dep:DepartmentService , private router:Router) { }

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    this._dep.byid(this.id)
      .subscribe(
        {
          next: (res) => {
            this.dep = res;
          },
          error: (err) => {
            console.log(err);
            
          }
      }
    )

  }

  update() {
    this._dep.update(this.id, this.dep)
      .subscribe(
        {
          next: (res) => {
            this.dep = res;
            this.router.navigate(['/dashboard/gestiondepartment/list']);
        },
          error: (err) => {
            console.log(err);
            
          }
      }
    )
    
  }
}
