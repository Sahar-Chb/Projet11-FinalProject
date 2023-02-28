import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private url = 'http://127.0.0.1:3000/department/';

  constructor(private http: HttpClient) { }
  
  create(data: any) {
    return this.http.post(this.url + 'create',data);
  }

  all() {
    return this.http.get(this.url + 'all');
    // return this.http.get(this.url+'all');
  }

  byid(id: any) {
    return this.http.get(this.url + 'byid/' + id);
  }

  delete(id: any) {
    return this.http.delete(this.url + 'delete/' + id);
  }

  update(id: any, data: any) {
    return this.http.put(this.url + 'update/' + id, data);
  }
}
