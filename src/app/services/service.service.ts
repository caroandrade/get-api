import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {




  constructor( private http: HttpClient) { }


  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`https://reqres.in/api/users?page=2`)
}

}

