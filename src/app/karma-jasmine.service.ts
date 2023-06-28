import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class KarmaJasmineService {

  constructor() { }

  sumar(a: number, b: number): number {
    return a + b;
  }
  restar(a: number, b: number): number {
    return a - b;
  }
  dividir(a: number, b: number): number {
    return a / b;
  }
  multiplicar(a: number, b: number): number {
    return a * b;
  }
  esPar = (a: number) => a % 2 == 0 ? "Es par" : "No es par";

  palindromo(palabra:string) {
    const tryPalindromo = palabra.toLowerCase().split("").reverse().join("");
    if(tryPalindromo == palabra){
      return "Es palindromo"
    }else{
      return "No es palindromo"
    }
  }
}
