import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() =>{
      this.peliculas = [{
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
  
  peliculas: any;
  
  title = 'peliculas-app';

}
