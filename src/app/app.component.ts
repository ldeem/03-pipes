import { Component } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Luly';
  nombre2 = 'anahi joSEfina galiNdo sanCHez';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Woverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };

  // tslint:disable-next-line: no-shadowed-variable
  valordePromesa = new Promise( ( resolve , reject ) => {
    setTimeout( () => resolve('Llego la data!'), 3500);
  });

  fecha = '2019-11-19';

  video = 'xKh0g1nKOQ4';

}
