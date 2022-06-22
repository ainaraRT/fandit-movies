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
  page: number = 1;
  movieSearch!: string;

  component: boolean = true;

  constructor(private movieService: MovieService,
    public route: Router) {}

  ngOnInit() {
    
  }

  //Searching movies when you type something
  searchMovie(): any{
    this.component = true
    console.log(this.movieSearch)

    //Service to show all the movies with the reference you write
    this.movieService.searchMovie(this.page, this.movieSearch).subscribe(
      myMovies => {
        this.page = myMovies.page
        this.movies = Object.values(myMovies.results);
        this.movies.length = 8
        console.log("HOLA " + JSON.stringify(this.movies))
      });
  }

  //Go to the information of the movie
  goToDetail(id: string) {
    console.log("CLICK")
    this.movieService.getDetail(id).subscribe(myMovies => {
      this.route.navigate([`movie/${id}`]);
      this.hideComponent()
    })
  }

  //Function to hide all the movies of the search bar
  hideComponent() {
    this.component = false
  }
}
