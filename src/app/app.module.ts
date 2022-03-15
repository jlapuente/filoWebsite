import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
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
import { MatButtonModule, MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatSelectModule, MatTableModule } from '@angular/material';
import { OrganizationComponent } from './organization/organization.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatCardModule } from '@angular/material/card'; 
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScheduleComponent } from './schedule/schedule.component';
import { ArticlesComponent } from './articles/articles.component';
import { SanitizeHtml } from './pipes/html-sanitizer.pipe'; 
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTabsModule } from '@angular/material/tabs';
import { TimelineComponent } from './timeline/timeline.component';
import { GraphsComponent } from './graphs/graphs.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { MapsComponent } from './maps/maps.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HomeComponent,
    AboutUsComponent,
    CalendarComponent,
    TrelloComponent,
    StatsComponent,
    InfoComponent,
    TeachersComponent,
    OrganizationComponent,
    ScheduleComponent,
    ArticlesComponent,
    SanitizeHtml,
    TimelineComponent,
    GraphsComponent,
    GlossaryComponent,
    MapsComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatInputModule,
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
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    FontAwesomeModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
