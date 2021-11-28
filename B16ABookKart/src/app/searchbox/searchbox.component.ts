import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  searchResults = [];
  allBooks = [];
  searchBox = new FormControl();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadAllBooks();
  }

  loadAllBooks() {
    this.http.get("https://bookcart.azurewebsites.net/api/Book").subscribe((data: any) => {
      this.allBooks = data;
    })
  }

  search(event: any) {
    let searchQuery = this.searchBox.value;
    this.searchResults = this.allBooks?.filter((option: any) => option.title.toLowerCase().includes(searchQuery)
      || option.author.toLowerCase().includes(searchQuery));
    console.log("Results:", this.searchResults);
  }

}
