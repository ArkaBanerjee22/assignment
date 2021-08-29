import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieDetails, MovieModel } from 'src/app/model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
@Input() data: MovieModel ;
@Input() details: MovieDetails ;
@Output() idEmitter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }


  emitId(){
    this.idEmitter.emit(this.data.imdbID) ;
  }

  resetDetails() {
    this.details = null ;
  }
}
