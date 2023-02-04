import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  url:string="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) {

   }
  alertdata(){
    alert("This is from Test Service")
  }
  showtodaysdate(){
    let date = new Date();
    return date;
  }

  getuserdata():Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }
 
}
