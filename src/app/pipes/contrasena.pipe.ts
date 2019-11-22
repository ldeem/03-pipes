import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {

    if (activar) {
        let salida = '';
        // tslint:disable-next-line: one-line
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < value.length; i++) {
            salida += '*';
        }
        return salida;
        } else {
            return value;
        }
    }
  }
