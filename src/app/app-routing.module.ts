import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import { TrelloComponent } from './trello/trello.component';


const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  {path: 'home', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'trello', component: TrelloComponent},
  { path: 'stats', component: StatsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
