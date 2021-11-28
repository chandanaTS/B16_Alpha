import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WishService {
  url="https://bookcart.azurewebsites.net/api/Wishlist/123"
  constructor(private http: HttpClient) { }
//   listposter(get:any){
//     const httpHeader=new HttpHeaders({
//       'content-type':'application/json'
//     });
  
//     return this.http.post(this.url, JSON.stringify(get),{headers:httpHeader});
//   }  
    getlist(){
        return this.http.get(this.url)
    }
}
