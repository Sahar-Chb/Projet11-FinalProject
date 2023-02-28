import { Component, OnInit} from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';


@Component({
  selector: 'app-createdep',
  templateUrl: './createdep.component.html',
  styleUrls: ['./createdep.component.css']
})
export class CreatedepComponent implements OnInit {

  depForm: FormGroup;


  constructor(private fb: FormBuilder , private _dep:DepartmentService , private router:Router) {
    let controls = {
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(12)
      ]),

      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),

      etage: new FormControl(0, [
        Validators.required,
        Validators.min(1),
        Validators.max(6)
      ]),

      salle: new FormControl(0, [
        Validators.required,
        Validators.min(1),
        Validators.max(20)
      ])
    }

    this.depForm = this.fb.group(controls);
   }

  ngOnInit(): void {
  }

  ajout() {
    this._dep.create(this.depForm.value)
      .subscribe(
        {
          next: (res) => {
            this.router.navigate(['/dashboard/gestiondepartment/list']);
            
          },
          error: (err) => {
            console.log(err);
            
          }
      }
    )
  }

}
