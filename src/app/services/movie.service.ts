import { MovieList } from './../models/movie.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_KEY = "d0a0b78d4500c347400877aac4d6a41f"

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: MovieList[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  // GET - Movies now playing
  getList(page: number): Observable<any> {
    let url = `${environment.URL}movie/now_playing?language=es&api_key=${API_KEY}&page=${page}&sort_by=release_date.desc`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        console.log(response.results)
        return response;
    })
    )
  }


  // Set the list of the movies
  setList(myMovies: MovieList[]) {
    this.movies = myMovies;
  }

  // GET - Movie information
  getDetail(id: string | null): Observable<any> {
    let url = `${environment.URL}movie/${id}?api_key=${API_KEY}&language=es`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response;
    })
    )
  }


  // GET - Search movies
  searchMovie(page: number, query: string) {
    let url = `${environment.URL}search/movie?api_key=${API_KEY}&language=es&query=${query}&page=${page}`;
    return this.http.get<any>(url).pipe(
      map((response) => {
        return response;
    })
    )
  }
}

