import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticlesComponent } from './articles/articles.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { GraphsComponent } from './graphs/graphs.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { OrganizationComponent } from './organization/organization.component';
import { StatsComponent } from './stats/stats.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TrelloComponent } from './trello/trello.component';
import { MapsComponent } from './maps/maps.component';
import { AuthorsComponent } from './authors/authors.component';


const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'home', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'organization', component: OrganizationComponent},
  { path: 'stats', component: StatsComponent},
  { path: 'info', component: InfoComponent},
  { path: 'teachers', component: TeachersComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: 'timeline', component: TimelineComponent},
  { path: 'map', component: MapsComponent},
  { path: 'glossary', component: GlossaryComponent},
  { path: 'graphs', component: GraphsComponent},
  { path: 'authors', component: AuthorsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
