import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.scss']
})
export class CartlistComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }


  ngOnInit(): void {
  }

}
