import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'frueiApp';

  palabra: string = "_hola mundo_";

  listadoDePalabras: string[] = [ "hola 1" , "hola" , "hola", "hola 4", "hola mundo" ];

  listadoDeNumeros: number[] = [ 1, 3, 5, 6, 7 ];

  puedoMostrar: boolean = true;
}
