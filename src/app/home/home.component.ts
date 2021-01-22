import { Component, OnInit } from '@angular/core';
import { faSync } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faSync = faSync;
  $: any;
  constructor() { }

  ngOnInit() {
    // var btn = document.getElementById('my-btn');
    // btn.onclick = function (event) {
    //   btn.children[0].classList.add('spin-animation');
    //   setTimeout(function () {
    //     btn.children[0].classList.remove('spin-animation');
    //   }, 500);
    // }
  }

  animate(){
    console.log($('.agenda'));
    $('.agenda').toggle();
    $('.birthday').toggle();
  }

}
