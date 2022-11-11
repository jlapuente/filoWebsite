import { Component, OnInit } from '@angular/core';
import medievalJson from '../../assets/json/timelines/medieval.json';
import modernaJson from '../../assets/json/timelines/moderna.json';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHourglass } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import moment from 'moment';
import 'moment/locale/es';

declare var $: any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  selected: number = 1;
  timelines: timeLine[];
  editableJson: string = "";
  selectedItem: timeLineItem;
  $: any;
  faUser = faUser;
  faHourglass = faHourglass;
  activeLink;
  edition: boolean = true;
  editableTimeLine: timeLine;

  constructor() { }

  ngOnInit() {
    this.prepareContent();
    this.prepareTimeLines();
  }

  prepareContent() {
    moment.locale('es');
    $('[data-toggle="tooltip"]').tooltip();
  }

  prepareTimeLines() {
    this.editableJson = JSON.stringify(modernaJson, null, 2);
    this.timelines = [];
    this.timelines.push(medievalJson);
    this.timelines.push(modernaJson);
    this.timelines.forEach(element => {
      this.sortTimeLine(element);
    });
    this.selectedItem = this.timelines[0].items[0];
    this.activeLink = this.timelines[0];
  }

  sortTimeLine(elem: timeLine) {
    elem.items = elem.items.sort((a, b) => {
      let firstDate = a.date;
      let secondDate = b.date;
      for (let i = firstDate.length; i < 4; i++) {
        firstDate = "0" + firstDate;
      }
      for (let i = secondDate.length; i < 4; i++) {
        secondDate = "0" + secondDate;
      }
      if (firstDate.length <= 4) {
        firstDate = "01/01/" + firstDate;
      }
      if (secondDate.length <= 4) {
        secondDate = "01/01/" + secondDate;
      }
      let aDate = moment(firstDate, 'DD/MM/YYYY', false)
      let bDate = moment(secondDate, 'DD/MM/YYYY', false)
      return aDate.valueOf() - bDate.valueOf();
    });
  }

  selectItem(item) {
    this.selectedItem = item;
    console.log(this.selectedItem);
    this.openModal("");
  }

  openModal(text: string) {
    $('#myModal').modal('toggle');
  }

  convertTimeLine() {
    this.edition = !this.edition;
    if(!this.edition){
      this.editableTimeLine = JSON.parse(this.editableJson);
      this.sortTimeLine(this.editableTimeLine);
    }
    console.log(this.editableTimeLine);
  }


}

export class timeLineItem {
  id: number;
  title: string;
  inverted: boolean;
  icon: string;
  date: string;
  place: string;
  body: string;
  portrait: string;

  constructor() { }
}
export class timeLine {
  id: number;
  period: string;
  items: timeLineItem[];

  constructor() { }
}