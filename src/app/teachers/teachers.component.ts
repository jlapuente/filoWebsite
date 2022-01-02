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
  defaultUrl: string = "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png";
  ngOnInit() {
    let card: Card = new Card('', 'Jesús Ezquerra Gómez', 'Filosofía Politica I', '<ul class="list-group"> <li class="list-group-item"> Email:  jesusezquerragomez@gmail.com  </li> <li class="list-group-item"> Forma de Aprobar: Participacion en seminarios y Trabajo monográfico </li> <li class="list-group-item"> Fecha Fin Asignatura: xx/xx/2022 </li></ul>', new Link('PROGRAMA Teorías Éticas 20-21.pdf', '../../assets/docs/programas/PROGRAMA Teorías Éticas 20-21.pdf'));
    this.cards.push(card)
    card = new Card('', 'Juan Vicente Mayoral', 'Lógica I', '<ul class="list-group"> <li class="list-group-item"> Email:  jmayoral@unizar.es </li> <li class="list-group-item"> Forma de Aprobar: Examen tipo test de los contenidos </li> <li class="list-group-item"> Fecha Fin Asignatura: xx/xx/2022 </li></ul>', new Link('PROGRAMA_Filosofía de la cultura_25504_2020-2022.pdf', '../../assets/docs/programas/PROGRAMA_Filosofía de la cultura_25504_2020-2022.pdf'));
    this.cards.push(card)
    card = new Card('', 'Juan Velázquez González', 'Teoría del Conocimiento', '<ul class="list-group"> <li class="list-group-item"> Email:  jvelazq@unizar.es  </li> <li class="list-group-item"> Forma de Aprobar: Examen de la asignatura (Primer tema) y Seminario (Segundo tema) </li> <li class="list-group-item">Meet: <a href="https://meet.google.com/uoo-xwig-uea">https://meet.google.com/uoo-xwig-uea</a> </li><li class="list-group-item"> Fecha Fin Asignatura: XX/XX/2022 </li></ul>', new Link('Programa. 2020-2022.pdf', '../../assets/docs/programas/Programa. 2020-2022.pdf'));
    this.cards.push(card)
    card = new Card('', 'Santiago Echandi', 'Pensamiento Musulman y Judio', '<ul class="list-group"> <li class="list-group-item"> Email:  sechandi@unizar.es </li> <li class="list-group-item"> Forma de Aprobar: Trabajo monográfico </li> <li class="list-group-item"> Fecha Fin Asignatura:  xx/xx/2022  </li></ul>', new Link('TFC2020-21.doc', '../../assets/docs/programas/TFC2020-21.doc'));
    this.cards.push(card)
    card = new Card('', 'Aida Míguez Barciela', 'Historia de la Filosofía Antigua', '<ul class="list-group"> <li class="list-group-item"> Email:  amiguez@unizar.es  </li><li class="list-group-item"> Forma de Aprobar: Examen de contenidos </li> <li class="list-group-item"> Fecha Fin Asignatura: xx/xx/2022 </li></ul>', new Link('Programa de la asignatura.pdf', '../../assets/docs/programas/Programa de la asignatura.pdf'));
    this.cards.push(card)
  }
  updateUrl(event){
    console.log(event);
    event.target.src = this.defaultUrl;
  }
}
