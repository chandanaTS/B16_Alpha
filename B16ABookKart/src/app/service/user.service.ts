import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url="https://bookcart.azurewebsites.net/api/User"
  constructor(private http: HttpClient) { }
   poster(post:any){
    const httpHeader=new HttpHeaders({
      'content-type':'application/json'
   });
  
    return this.http.post(this.url, JSON.stringify(post),{headers:httpHeader});
  }  
}
