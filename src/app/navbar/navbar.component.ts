import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.prepareMenu();
  }

  prepareMenu(){
    let burger = document.getElementById('burger'),
      nav = document.getElementById('main-nav');

    burger.addEventListener('click', function (e) {
      this.classList.toggle('is-open');
      nav.classList.toggle('is-open');
    });

    /* Onload demo - dirty timeout */
    // let clickEvent = new Event('click');

    // window.addEventListener('load', function (e) {
    //   burger.dispatchEvent(clickEvent);

    //   setTimeout(function () {
    //     burger.dispatchEvent(clickEvent);
    //   }, 5500);
    // });
  }


  closeNav(){
    let navCloser = document.getElementById("burger");
    navCloser.click();
  }
}