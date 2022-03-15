import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("#map-europe").CSSMap({
      "size": 1450,
      "mapStyle": "default",
      "cities": true,
      "responsive": "auto",
      "disableClicks": true,
      "activateOnLoad": ["eu3", "eu16", "eu17", "eu47"],
      "pins": {
        "enable": true,
        "pinsId": "#demo-markers",
        "mapSize": 1450,
        "markerPosition": "middle",
        "tooltipPosition": "top",
        "tooltipOnClick": false,
        "clickableRegions": true,
      },
      // "agentsList": {
      //   "enable": true,
      //   "agentsListId": "#demo-agents",
      //   "agentsListOnHover": false
      // }
    });
  }

  showItem(item) {
    console.log(item);
  }
}
