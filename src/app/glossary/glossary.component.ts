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
  search: string = "";
  selectedBranch: any;

  branches: any[] = [
    { value: '-1', viewValue: '' },
    { value: '0', viewValue: 'General' },
    { value: '1', viewValue: 'Antropología' },
    { value: '2', viewValue: 'Epistemología y Teoría del Conocimiento' },
    { value: '3', viewValue: 'Lógica y Filosofía del lenguaje' },
    { value: '4', viewValue: 'Política' },
    { value: '5', viewValue: 'Metafísica y Ontología' }
  ];

  ngOnInit() {
    this.completeTerms = words;
    this.changeGlossary('');

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.listOfChars = alpha.map((x) => String.fromCharCode(x));

  }


  changeGlossary(char) {
    // If the user clicks the same char as selected, then we remove it
    if (this.selectedChar == char) {
      this.selectedChar = "";
    } else {
      this.selectedChar = char;
    }
    this.changeSelectedCharClass(this.selectedChar);
    this.filterByChar(this.selectedChar);
    this.changeSearch();
  }

  changeSelectedCharClass(char?) {
    var previousElement = document.getElementsByClassName('active')[0];
    if (previousElement) {
      previousElement.classList.remove('active');
    }
    if (char) {
      document.getElementById('selectedChar' + char).classList.add('active');
    }
  }

  filterByChar(char) {
    this.terms = this.completeTerms.filter((term) => term.name.startsWith(char));
    this.terms = this.terms.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }

  changeSearch() {

    this.filterByChar(this.selectedChar);
    let tempTerms = this.terms;

    if (this.search) {
      tempTerms = tempTerms.filter((term) => {
        return term.body.indexOf(this.search) > 0;
      })
    }

    if (this.selectedBranch) {
      tempTerms = tempTerms.filter((term) => {
        return term.category == this.selectedBranch;
      })
    }

    this.terms = tempTerms;
  }

  getCategory(id) {
    return this.branches.find(branch => { return branch.value == id }).viewValue;
  }

  clearFilters() {
    this.selectedBranch = null;
    this.search = ''
    this.changeSearch();
  }
}

export class word {
  name: string;
  href: string;
  body: string;
  fullname: string;
  category: any;
}