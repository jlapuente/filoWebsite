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
  
  branches: any[] = [
    { value: '0', viewValue: 'General' },
    { value: '1', viewValue: 'Antropología' },
    { value: '2', viewValue: 'Epistemología y Teoría del Conocimiento' },
    { value: '3', viewValue: 'Lógica y Filosofía del lenguaje' },
    { value: '4', viewValue: 'Política' },
    { value: '5', viewValue: 'Metafísica y Ontología' }
  ];
  selectedBranch: any;
  
  ngOnInit() {
    this.completeTerms = words;
    this.changeGlossary('A');

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.listOfChars = alpha.map((x) => String.fromCharCode(x));

  }

  changeGlossary(char) {
    this.search = "";
    this.selectedChar = char;
    this.terms = this.completeTerms.filter((term) => term.name.startsWith(char));
    this.terms = this.terms.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
    this.removeSelectedChar(char);
  }
  removeSelectedChar(char?) {
    let previousElement = document.getElementsByClassName('active')[0];
    console.log(previousElement);
    if (previousElement && char) {
      previousElement.classList.remove("active")
      document.getElementById('selectedChar' + char).classList.add('active');
    }
  }

  changeSearch() {
    let tempTerms = this.completeTerms;
    if(this.search){
      tempTerms = tempTerms.filter((term) => {
        return term.body.indexOf(this.search) > 0;
      })
    }
    if(this.selectedBranch){
      tempTerms = tempTerms.filter((term) => {
        return term.category == this.selectedBranch;
      })
    }

    this.terms = tempTerms;
    this.removeSelectedChar();
  }

  getCategory(id){
   return this.branches.find(branch => { return branch.value == id}).viewValue;
  }

}

export class word {
  name: string;
  href: string;
  body: string;
  fullname: string;
  category: any;
}