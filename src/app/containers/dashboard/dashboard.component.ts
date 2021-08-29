import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/model';
import { MovieSearchService } from 'src/app/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
results: MovieModel[] ;
movieDetails ;
  constructor(private movieSvc:MovieSearchService) { }

  ngOnInit(): void {
  }


  getSearchResults(t) {
   if(t.length>2) {
    this.movieSvc.getSearcResults(t).subscribe(r => {
      if(r.Response === "True") {
        this.results = r.Search ;
      } else if (r.Response == "False") {
        this.results = [] ;
      }
    }) 
   }

  }

  getDetails(id) {
    this.movieSvc.getMoviebyId(id).subscribe(r => {
      if(r.Response) {
       this.movieDetails = r ;
      }
    }) ;
  }
}
