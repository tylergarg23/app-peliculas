import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }

  peliculas: any;

  ngOnInit(): void {
    this.peliculas = [{
      titulo: 'Harry Photter - Test',
      fechaLanzamiento: new Date(),
      precio: 150.00
    },
    {    
      titulo: 'Spider-Man',
      fechaLanzamiento: new Date('2005-10-10'),
      precio: 180.00
    }]
  }

}
