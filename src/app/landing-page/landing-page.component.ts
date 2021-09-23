import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
      this.peliculasEnCines = [{
        titulo: 'Harry Photter',
        fechaLanzamiento: new Date(),
        precio: 150.00,
        poster: 'https://www.cinemascomics.com/mrf4u/statics/i/ps/2.bp.blogspot.com/-rur5oeQYS1U/TZHqB0T-_3I/AAAAAAAAIPw/g3OezkrYmaA/s1600/harry-potter-and-the-deathly-hallows-part-2-movie-poster-01.jpg?width=1200&enable=upscale'
      },
      {    
        titulo: 'Spider-Man',
        fechaLanzamiento: new Date('2005-10-10'),
        precio: 180.00,
        poster: 'https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/08/Spider-Man-3-Arte-Promocional.jpg?resize=1280%2C1283&quality=80&ssl=1'
      }]
  }

  peliculasEnCines: any;
  peliculasProximosEstrenos = []

}
