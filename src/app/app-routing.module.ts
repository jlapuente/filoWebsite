import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticlesComponent } from './articles/articles.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { OrganizationComponent } from './organization/organization.component';
import { StatsComponent } from './stats/stats.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TrelloComponent } from './trello/trello.component';


const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'home', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'organization', component: OrganizationComponent},
  { path: 'stats', component: StatsComponent},
  { path: 'info', component: InfoComponent},
  { path: 'teachers', component: TeachersComponent},
  { path: 'articles', component: ArticlesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
