import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input()
  maximoRating = 5;
  @Input()
  ratingSeleccionado = 0;
  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr: any;
  votado = false;
  ratingAnterio: any;

  constructor() { }

  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejarMouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;
  }

  manejarMouseLeave(){
    if(this.ratingAnterio !== 0){
      this.ratingSeleccionado = this.ratingAnterio;
    }else{
      this.ratingSeleccionado = 0;
    }
    
  }

  rate(index: number): void {
    this.ratingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterio = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }
}
