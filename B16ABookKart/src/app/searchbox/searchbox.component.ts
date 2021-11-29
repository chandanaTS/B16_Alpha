import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface Book {
  bookId: number;
  title: string;
  author: string;
  category: string;
  price: number;
  coverFileName: string;
}

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {
  allBooks : Book[] = [];
  searchResults !: Observable<Book[]>;
  searchBox = new FormControl();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadAllBooks();
    
    this.searchResults = this.searchBox.valueChanges.pipe(
      map(name => (name ? this._filter(name) : this.allBooks.slice())),
    );
  }

  loadAllBooks() {
    this.http.get("https://bookcart.azurewebsites.net/api/Book").subscribe((data: any) => {
      this.allBooks = data;
    })
  }

  displayFn(book: Book): string {
    return book && book.title ? book.title : '';
  }

  private _filter(title: string): Book[] {
    const searchQuery = title.toLowerCase();

    return this.allBooks?.filter((option: any) => option.title.toLowerCase().includes(searchQuery)
    || option.author.toLowerCase().includes(searchQuery));
  }


}
