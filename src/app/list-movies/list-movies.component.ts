import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MovieService } from './../services/movie.service';
import { MovieList } from './../models/movie.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  movies!: MovieList[];
  page: number = 1;

  constructor(public movieService: MovieService,
    public route: Router) { }

  ngOnInit(): void {
    this.page;
    this.movies = this.movieService.movies;
    this.functionList()
  }

  functionList() {
    this.movieService.getList(this.page).subscribe(
      myMovies => {
        this.page = myMovies.page
        
        this.movies = Object.values(myMovies.results);
        console.log("PAGINA " + this.page)
        if(myMovies.results.poster_path != "null") {
          this.movies.map(m => {
              m.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${m.poster_path}`
              return m;
          })
          this.movieService.setList(this.movies);
        }
        
      });
  }

  nextPage(): any {
    this.page = this.page + 1;
    this.functionList() 
  }

  previousPage(): any {
    this.page = this.page - 1;
    this.functionList()
  }

  goToDetail(id: string) {
    console.log("CLICK")
    this.movieService.getDetail(id).subscribe(myMovies => {
      this.route.navigate([`movie/${id}`]);
    })
  }

}
