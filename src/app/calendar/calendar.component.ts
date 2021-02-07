import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  $: any;
  animate() {
    console.log($('.agenda'));
    $('.agenda').toggle();
    $('.birthday').toggle();
  }

}
