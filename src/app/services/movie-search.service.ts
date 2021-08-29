import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieModel } from '../model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
key = '92087764&' ;
url = environment.movieUrl
  constructor(private apiSvc: ApiService) { }

  getMoviebyId(id): Observable<any> {
    return this.apiSvc.get(`${this.url}${this.key}&i=${id}`) ;
  }

  getSearcResults(term): Observable<any> {
    return this.apiSvc.get(`${this.url}${this.key}&s=${term}`) ;
  }
}
