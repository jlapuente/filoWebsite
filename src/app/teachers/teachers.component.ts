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
    let card: Card = new Card('https://www.catarata.org/media/catarata55/images/thumbs/author-79539-130x190.jpg', 'José Luis López de Lizaga', 'Profesor de Teorias Éticas', '<ul class="list-group"> <li class="list-group-item"> Email:  lizaga@unizar.es  </li> <li class="list-group-item"> Forma de Aprobar: Examen final (Necesario aprobar las tres partes) </li> <li class="list-group-item"> Fecha Fin Asignatura: 07/06/2021 </li></ul>', new Link('PROGRAMA Teorías Éticas 20-21.pdf', '../../assets/docs/programas/PROGRAMA Teorías Éticas 20-21.pdf'));
    this.cards.push(card)
    card = new Card('https://media-exp1.licdn.com/dms/image/C4E03AQG78DCsz475sg/profile-displayphoto-shrink_200_200/0/1516827850409?e=1618444800&v=beta&t=_lp5Ifih6e-Rnwozg7-l3sezc_cTBzBE0P8Xy17tzcU', 'Julien Christian Canavera', 'Profesor de Filosofía de la cultura', '<ul class="list-group"> <li class="list-group-item"> Email:  julien.canavera@unizar.es  </li> <li class="list-group-item"> Forma de Aprobar: Examen de los contenidos </li> <li class="list-group-item"> Fecha Fin Asignatura: 25/06/2021 </li></ul>', new Link('PROGRAMA_Filosofía de la cultura_25504_2020-2021.pdf', '../../assets/docs/programas/PROGRAMA_Filosofía de la cultura_25504_2020-2021.pdf'));
    this.cards.push(card)
    card = new Card('https://sociedadaragonesadefilosofia.files.wordpress.com/2014/05/mg_2905.jpg?w=200&h=300', 'Elvira Burgos Diaz', 'Profesora de Pensamiento Feminista', '<ul class="list-group"> <li class="list-group-item"> Email:  eburgos@unizar.es  </li> <li class="list-group-item"> Forma de Aprobar: Trabajo de preguntas </li> <li class="list-group-item">Meet: <a href="https://meet.google.com/eho-kdra-ini">https://meet.google.com/eho-kdra-ini</a> </li><li class="list-group-item"> Fecha Fin Asignatura: 16/06/2021 </li></ul>', new Link('Programa. 2020-2021.pdf', '../../assets/docs/programas/Programa. 2020-2021.pdf'));
    this.cards.push(card)
    card = new Card('https://est.zetaestaticos.com/cordoba/img/autores/0/000/756.jpg', 'Juan Manuel Aragüés Estragués', 'Profesor de Teorías filosóficas de la Ciudadanía', '<ul class="list-group"> <li class="list-group-item"> Email:  aragues@unizar.es  </li> <li class="list-group-item"> Forma de Aprobar: Trabajo sobre tres de los libros o examen </li> <li class="list-group-item"> Fecha Fin Asignatura:  21/06/2021  </li></ul>', new Link('TFC2020-21.doc', '../../assets/docs/programas/TFC2020-21.doc'));
    this.cards.push(card)
    card = new Card('https://www.ucm.es/data/cont/media/www/pag-109213/victoria%20p%C3%A9rez%20royo%20copia%20(1).jpg', 'Victoria Perez Royo', 'Profesora de Filosofía de la Imagen', '<ul class="list-group"> <li class="list-group-item"> Email:  victoriaperezroyo@gmail.com  </li><li class="list-group-item"> Drive:  <a href="https://drive.google.com/drive/folders/1gggZWEe6uJDTnqiu4CKV11A3j4SiLUiX"> https://drive.google.com/drive/folders/1gggZWEe6uJDTnqiu4CKV11A3j4SiLUiX </a> </li> <li class="list-group-item"> Forma de Aprobar: Trabajo de dos obras </li> <li class="list-group-item"> Fecha Fin Asignatura: 02/06/2021 </li></ul>', new Link('Programa de la asignatura.pdf', '../../assets/docs/programas/Programa de la asignatura.pdf'));
    this.cards.push(card)
  }

}
