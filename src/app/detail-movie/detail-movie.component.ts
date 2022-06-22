import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieService } from './../services/movie.service';
import { MovieModel } from './../models/movie.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {

  movie!: MovieModel;
  sub: any;
  
  id!: number;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((parms: ParamMap) => {
      this.movieService.getDetail(parms.get('id')).subscribe(
          response => {
            this.movie = response;
            console.log("PELICULA " + JSON.stringify(this.movie))
            if(response.poster_path != "null") {
              this.movie.poster_path = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${this.movie.poster_path}`
            }
          }
      )
  }); 
  }

  goBack() {
    this.location.back();
  }

}
