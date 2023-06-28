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

  palindromo(frase: string) {
    const fraseString = frase.toLowerCase().replace(/\s/g, "");
    const tryPalindromo = fraseString.toLowerCase().split("").reverse().join("");
    if (fraseString == tryPalindromo) {
      return "Es palindromo"
    } else {
      return "No es palindromo"
    }
  }

  factorial(a: number): number {
    let resultado = 1;
    for (let i = 1; i <= a; i++) {
      resultado *= i;
    }
    return resultado;
  }

  maximo(a: number, b: number): number {
    return Math.max(a, b)
  }

  aMayus(frase: string): string {
    return frase.toUpperCase();
  }

  numeroPrimo(a: number): boolean {
    if (a <= 1) {
      return false;
    } 
    for (let i =2; i<= i*i; i++){
      if(a % i ==0){
        return false;
      }
      return true;
    }
  }
}

