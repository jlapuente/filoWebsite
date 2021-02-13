import { Component, OnInit } from '@angular/core';
import { ARTICLES } from '../properties/articles';
import { Article, CONSTANTS } from '../properties/constants';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  article: Article = new Article('','','','','','',);
  articlesList: Article[];
  constructor() { }

  ngOnInit() {
    console.log(this.articlesList);
    // this.article = new Article("Javier Lapuente", 'Articulo de Prueba', 'Como hacer tal y tal', new Date, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br> <img src='" + CONSTANTS.mainFolder + CONSTANTS.carousselFolder +"/day_dreaming.svg'>");
    this.articlesList =  ARTICLES.listOfArticles;
    this.article = this.articlesList[0];
  }

  // cambiarArticulo(){
  //   this.articlesList.forEach(element => {
  //     if(element.id == this.selected){
  //       this.article = element;
  //     }   
  //   });
  // }

  compareObjects(o1: any, o2: any): boolean {
    console.log(o1);
    console.log(o2);
    console.log(o1.id === o2.id);
    return o1.id === o2.id;
  }
}
