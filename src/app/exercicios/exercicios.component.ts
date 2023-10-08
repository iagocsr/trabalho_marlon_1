import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {

  texto="olá, mundo"

  Google='https://www.google.com/'

  corDoTexto='red'
  corDoBackground='white'
  setMudarBackground(){
    if(this.corDoBackground=='white'){
      this.corDoBackground='black'
      this.corDoTexto='white'
    } else {
      this.corDoBackground='white'
      this.corDoTexto='red'
    }
  }


  Texto=''
  setTexto(value:string){
    this.Texto=value
  }


}
