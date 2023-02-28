import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {

  name: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);

  description: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(30),
  ]);

  entreprise: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  
  titreprojet: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);

  
  id: any;
  client: any;

  image: any;

  select(e: any){
    this.image = e.target.files[0];
}

  constructor( private act:ActivatedRoute , private _client:ClientService ,private router:Router) { }

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');

    this._client.byid(this.id)
      .subscribe(
        {
          next: (res) => {
            this.client = res;
          },
          error: (err) => {
            console.log(err);
            
          }
      }
    )

  }

  saveChange() {
    let fd = new FormData;
    fd.append('name', this.client.name);
    fd.append('description', this.client.description);
    fd.append('entreprise', this.client.entreprise);
    fd.append('titreprojet', this.client.titreprojet);
    
    if (this.image) {
      fd.append('image', this.image);
    } else {
      fd.append('image', this.client.image);
    }

    this._client.update(this.id, fd)
      .subscribe(
        {
          next: (res) => {
          Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your client update has been saved',
          showConfirmButton: false,
          timer: 1500
          })
            this.router.navigate(['/dashboard/gestionclient/list']);
        },
          error: (err) => {
            console.log(err);
            
          }
      }
    )

  }

}
