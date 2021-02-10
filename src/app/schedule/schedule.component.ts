import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  lectiveHours: string[] = ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']
  daysOfWeek: String[] = ["", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  classes: Class[] = [];
  constructor() { }

  ngOnInit() {
    this.classes.push(new Class('Teorías Éticas', 2), new Class('Pensamiento Feminista', 2));
    console.log(this.classes);
  }

}

export class Class {
  length: number;
  text: string;

  constructor(text, length){
    this.length = length;
    this.text = text;
  }
}
