import { Component, OnInit } from '@angular/core';
import { Card, Link } from '../properties/constants';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  cards: Card[] = [];
  constructor() { }

  ngOnInit() {
    let card: Card = new Card('https://www.catarata.org/media/catarata55/images/thumbs/author-79539-130x190.jpg', 'José Luis López de Lizaga', 'Profesor de Teorias Éticas', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iste, ullam sapiente necessitatibus molestiae, quia voluptatum temporibus voluptates facere fugit neque. Animi deleniti assumenda officia distinctio reiciendis amet perferendis facere.', new Link('PROGRAMA Teorías Éticas 20-21.pdf', '../../assets/docs/programas/PROGRAMA Teorías Éticas 20-21.pdf'));
    this.cards.push(card)
    card = new Card('https://media-exp1.licdn.com/dms/image/C4E03AQG78DCsz475sg/profile-displayphoto-shrink_200_200/0/1516827850409?e=1618444800&v=beta&t=_lp5Ifih6e-Rnwozg7-l3sezc_cTBzBE0P8Xy17tzcU', 'Julien Christian Canavera', 'Profesor de Filosofía de la cultura', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iste, ullam sapiente necessitatibus molestiae, quia voluptatum temporibus voluptates facere fugit neque. Animi deleniti assumenda officia distinctio reiciendis amet perferendis facere.', new Link('PROGRAMA Teorías Éticas 20-21.pdf', '../../assets/docs/programas/PROGRAMA Teorías Éticas 20-21.pdf'));
    this.cards.push(card)
    card = new Card('https://sociedadaragonesadefilosofia.files.wordpress.com/2014/05/mg_2905.jpg?w=200&h=300', 'Elvira Burgos Diaz', 'Profesora de Pensamiento Feminista', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iste, ullam sapiente necessitatibus molestiae, quia voluptatum temporibus voluptates facere fugit neque. Animi deleniti assumenda officia distinctio reiciendis amet perferendis facere.', new Link('Programa. 2020-2021.pdf', '../../assets/docs/programas/Programa. 2020-2021.pdf'));
    this.cards.push(card)
    card = new Card('https://est.zetaestaticos.com/cordoba/img/autores/0/000/756.jpg', 'Juan Manuel Aragüés Estragués', 'Profesor de Teorías filosóficas de la Ciudadanía', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iste, ullam sapiente necessitatibus molestiae, quia voluptatum temporibus voluptates facere fugit neque. Animi deleniti assumenda officia distinctio reiciendis amet perferendis facere.', new Link('PROGRAMA Teorías Éticas 20-21.pdf', '../../assets/docs/programas/PROGRAMA Teorías Éticas 20-21.pdf'));
    this.cards.push(card)
    card = new Card('https://www.ucm.es/data/cont/media/www/pag-109213/victoria%20p%C3%A9rez%20royo%20copia%20(1).jpg', 'Victoria Perez Royo', 'Profesora de Filosofía de la Imagen', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit iste, ullam sapiente necessitatibus molestiae, quia voluptatum temporibus voluptates facere fugit neque. Animi deleniti assumenda officia distinctio reiciendis amet perferendis facere.', new Link('PROGRAMA Teorías Éticas 20-21.pdf', '../../assets/docs/programas/PROGRAMA Teorías Éticas 20-21.pdf'));
    this.cards.push(card)
  }

}
