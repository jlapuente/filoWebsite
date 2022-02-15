import { Component, OnInit } from '@angular/core';
import  medievalJson from '../../assets/json/medieval.json';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  selected: number = 1;
  timelines: { id: number, period: string, items: timeLineItem[] }[];
  constructor() { }

  ngOnInit() {
    this.timelines = [];
    this.timelines.push(medievalJson);
    console.log(medievalJson);
    this.timelines.push(medievalJson);
    this.timelines[1].items.sort(function (a, b) {
      return a.id - b.id || a.title.localeCompare(b.title);
    });
    /* this.timelines = [
      { "id": 0, "period": "Filosofia Antigua", "items": [{ "id": 0, "title": "Santo Tomas", "inverted": true, "icon": "", "date": "2022", "body": "cuerpo" }, { "id": 0, "title": "Santo Tomas", "inverted": false, "icon": "", "date": "2022", "body": "cuerpo" }] },
      { "id": 1, "period": "Filosofia Medieval", "items": [{ "id": 0, "title": "Patrística", "inverted": true, "icon": "", "date": "100 DC - 451 (Concilio de Calcedonia)", "body": "La patrística se caracterizó por ser el periodo en que se gestó el contenido doctrinal de las creencias religiosas cristianas, así como su defensa apologética contra los ataques de las religiones paganas primero, y sucesivamente de las interpretaciones que dieron lugar a las herejías, después.​ Durante este período, el cristianismo es difundido masivamente por los profetas, tomando fuerza entre la población y desplazando a las religiones politeístas. <br> <br> Destacamos aqui a San Agustin de Hipona " }, { "id": 0, "title": "Santo Tomas", "inverted": true, "icon": "", "date": "2022", "body": "cuerpo" }] },
      { "id": 2, "period": "Filosofia Moderna", "items": [{ "id": 0, "title": "Santo Tomas", "inverted": true, "icon": "", "date": "2022", "body": "cuerpo" }, { "id": 0, "title": "Santo Tomas", "inverted": true, "icon": "", "date": "2022", "body": "cuerpo" }] }
    ]; */

  }

}

export class timeLineItem {
  id: number;
  title: string;
  inverted: boolean;
  icon: string;
  date: string;
  body: string;

  constructor() { }
}