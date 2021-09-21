import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() =>{
      this.peliculasEnCines = [{
        titulo: 'Harry Photter',
        fechaLanzamiento: new Date(),
        precio: 150.00
      },
      {    
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date('2005-10-10'),
        precio: 180.00
      }]
    }, 500)
  }
  
  peliculasEnCines: any;
  peliculasProximosEstrenos = [{
    titulo: 'Transformers 5',
    fechaLanzamiento: new Date(),
    precio: 120.00
  },
  {    
    titulo: 'Avengers',
    fechaLanzamiento: new Date('2005-10-10'),
    precio: 180.00
  },
  {    
    titulo: 'Rocky 5',
    fechaLanzamiento: new Date('2005-10-10'),
    precio: 190.00
  }]
  
  title = 'peliculas-app';

}
