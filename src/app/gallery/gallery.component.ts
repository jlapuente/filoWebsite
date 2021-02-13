import { Component, OnInit } from '@angular/core';
import { CONSTANTS } from '../properties/constants';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  mySlideImages: string[] = CONSTANTS.GALERY_IMAGES;
  mySlideOptions = { items: 1, dots: true, nav: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };
  constructor() { }

  ngOnInit() {
  }

}
