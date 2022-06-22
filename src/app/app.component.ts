import { Router } from '@angular/router';
import { MovieService } from './services/movie.service';
import { MovieList } from './models/movie.model';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'fanditMovies';

  movies!: MovieList[];
  titleMovie: any;
  page: number = 1;
  query!: string;
  movieSearch!: string;

  component: boolean = true;

  constructor(private movieService: MovieService,
    public route: Router) {}

  ngOnInit() {
    
  }

  searchMovie(): any{
    console.log(this.movieSearch)
    this.movieService.searchMovie(this.page, this.movieSearch).subscribe(
      myMovies => {
        this.page = myMovies.page
        this.movies = Object.values(myMovies.results);
        this.movies.length = 8
        console.log("HOLA " + JSON.stringify(this.movies))
      });
  }

  goToDetail(id: string) {
    console.log("CLICK")
    this.movieService.getDetail(id).subscribe(myMovies => {
      this.route.navigate([`movie/${id}`]);
      this.hideComponent()
    })
  }

  hideComponent() {
    this.component = false
  }
}
