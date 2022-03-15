import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import authors from '../../assets/json/authors/authors.json'
import { AUTHOR } from '../properties/author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  query: string;
  author: AUTHOR = new AUTHOR();

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.query = params.author;
        console.log(this.query); // price
        this.author = authors.find((term) => term.id == this.query);
        console.log(this.author);
        console.log(authors);
      }
      );
    console.log(authors);
  }

}
