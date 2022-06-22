import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: 'home',
    component: ListMoviesComponent
  },
  {
    path: 'movie/:id',
    component: DetailMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
