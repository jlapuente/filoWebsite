import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TrelloComponent } from './trello/trello.component';
import { StatsComponent } from './stats/stats.component';
import { InfoComponent } from './info/info.component';
import { TeachersComponent } from './teachers/teachers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule, MatListModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { OrganizationComponent } from './organization/organization.component';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatCardModule } from '@angular/material/card'; 
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScheduleComponent } from './schedule/schedule.component'; 

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    CalendarComponent,
    TrelloComponent,
    StatsComponent,
    InfoComponent,
    TeachersComponent,
    OrganizationComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
