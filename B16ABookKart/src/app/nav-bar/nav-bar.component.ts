import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  cart_count = 0;
  favorites_count = 0;
  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.getWishListCount();
    this.getCartCount();
  }

  getWishListCount(){
    this.http.get("https://bookcart.azurewebsites.net/api/Wishlist/123").subscribe((data:any) => {
      // data = [
      //   {
      //     "bookId": 0,
      //     "title": "string",
      //     "author": "string",
      //     "category": "string",
      //     "price": 0,
      //     "coverFileName": "string"
      //   }
      // ];
      console.log("Favorites Response from API Call: ", data);
      this.favorites_count = data.length;
    });
  }

  getCartCount(){
    this.http.get("https://bookcart.azurewebsites.net/api/ShoppingCart/123").subscribe((data:any) => {
      // data = [
      //   {
      //     "bookId": 0,
      //     "title": "string",
      //     "author": "string",
      //     "category": "string",
      //     "price": 0,
      //     "coverFileName": "string"
      //   }
      // ];
      console.log("Cart Response from API Call: ", data);
      this.cart_count = data.length;
    });
  }
}
