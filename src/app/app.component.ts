import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;
  events: string[] = [];
  opened: boolean = false;

  ngOnInit(): void {
  }
  title = 'filoWebsite';
}
