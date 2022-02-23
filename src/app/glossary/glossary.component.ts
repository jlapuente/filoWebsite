import { Component, OnInit } from '@angular/core';
import words from '../../assets/json/glossary/words.json'

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent implements OnInit {

  constructor() { }

  terms: word[] = [];
  selectedChar: string = 'A';
  completeTerms: word[];
  listOfChars: string[] = [];

  ngOnInit() {
    this.completeTerms = words;
    console.log(this.completeTerms);
    this.changeGlossary('A');

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.listOfChars = alpha.map((x) => String.fromCharCode(x));
    console.log(this.listOfChars);

  }

  changeGlossary(char) {
    this.selectedChar = char;
    this.terms = this.completeTerms.filter((term) => term.name.startsWith(char));
    console.log(this.terms);
    this.terms = this.terms.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    console.log(this.terms);
    let previousElement = document.getElementsByClassName('active')[0];
    console.log(previousElement);
    if (previousElement) {
      previousElement.classList.remove("active")
      document.getElementById('selectedChar' + char).classList.add('active');
    }
  }

}

export class word {
  name: string;
  href: string;
  body: string;
  fullname: string;
}