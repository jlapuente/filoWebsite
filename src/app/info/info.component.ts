import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;
// import * as treeview from "../../assets/plugins/js/bootstrap-treeview.js";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  $: any;
  constructor() { }


  ngOnInit() {
    this.listree();
  }


listree = function () {
  const subMenuHeadings = document.getElementsByClassName("listree-submenu-heading");
  Array.from(subMenuHeadings).forEach(function (subMenuHeading) {
    subMenuHeading.classList.add("collapsed");
    let nextSibling: any = subMenuHeading.nextElementSibling;
    nextSibling.style.display = "none";
    subMenuHeading.addEventListener('click', function (event) {
      event.preventDefault();
      let targetSibling: any = event.target;
      const subMenuList = targetSibling.nextElementSibling;
      if (subMenuList.style.display == "none") {
        subMenuHeading.classList.remove("collapsed");
        subMenuHeading.classList.add("expanded");
        subMenuList.style.display = "block";
      }
      else {
        subMenuHeading.classList.remove("expanded");
        subMenuHeading.classList.add("collapsed");
        subMenuList.style.display = "none";
      }
      event.stopPropagation();
    });
  });
}


}
