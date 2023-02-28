import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css']
})
export class CreateclientComponent implements OnInit {

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


  client = {
    name: '',
    description: '',
    entreprise: '',
    titreprojet:''
  }

  image: any;

  select(e: any) {
    this.image = e.target.files[0];
  }
  
  constructor(private _client: ClientService, private router: Router) {
  }
   

  ngOnInit(): void {
  }

  save() {
    let fd = new FormData;
    fd.append('name', this.client.name);
    fd.append('description', this.client.description);
    fd.append('entreprise', this.client.entreprise);
    fd.append('titreprojet', this.client.titreprojet);
    fd.append('image', this.image);

    this._client.create(fd)
      .subscribe(
        {
          next: (res) => {
            this.router.navigate(['/dashboard/gestionclient/list']);
          },
          error: (err) => {
            console.log(err);
            
          }
      }
    )
    
  }
}
