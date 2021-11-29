import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WishService } from '../service/wish.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(
  
    private router: Router,
    private wish: WishService
  ) { }

  ngOnInit(): void {
  }

}
