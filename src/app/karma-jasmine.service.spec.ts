import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';

describe('KarmaJasmineService', () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });
  it('deberia restar dos numeros correctamente', () => {
    const resultado = service.restar(2, 1);
    expect(resultado).toBe(1);
  });
  it('deberia restar dos numeros negativos correctamente', () => {
    const resultado = service.restar(-4, -7);
    expect(resultado).toBe(3);
  });
  it('deberia restar un numero negativo y un positivo correctamente', () => {
    const resultado = service.restar(-5, 10);
    expect(resultado).toBe(-15);
  });
  it('deberia dividir dos numeros correctamente', () => {
    const resultado = service.dividir(2, 1);
    expect(resultado).toBe(2);
  });
  it('deberia dividir dos numeros negativos correctamente', () => {
    const resultado = service.dividir(-4, -2);
    expect(resultado).toBe(2);
  });
  it('deberia dividir un numero negativo y un positivo correctamente', () => {
    const resultado = service.dividir(-5, 10);
    expect(resultado).toBe(-0.5);
  });
  it('deberia multiplicar dos numeros correctamente', () => {
    const resultado = service.multiplicar(3, 2);
    expect(resultado).toBe(6);
  });
  it('deberia multiplicar dos numeros negativos correctamente', () => {
    const resultado = service.multiplicar(-4, -2);
    expect(resultado).toBe(8);
  });
  it('deberia multiplicar un numero negativo y un positivo correctamente', () => {
    const resultado = service.multiplicar(-5, 10);
    expect(resultado).toBe(-50);
  });

  it('debería devolver "Es par" para números pares', () => {
    expect(service.esPar(4)).toEqual("Es par");
    expect(service.esPar(0)).toEqual("Es par");
    expect(service.esPar(-2)).toEqual("Es par");
  });

  it('debería devolver "No es par" para números impares', () => {
    expect(service.esPar(7)).toEqual("No es par");
    expect(service.esPar(13)).toEqual("No es par");
    expect(service.esPar(-9)).toEqual("No es par");
  });

  it('deberia ser palindromo', ()=>{
    const palabra= "ana";
    const frase = "Arriba la birra"
    expect(service.palindromo(palabra)).toEqual("Es palindromo")
    expect(service.palindromo(frase)).toEqual("Es palindromo")
  })

  it('sacar factorial de numero', ()=>{
    expect(service.factorial(5)).toBe(120);
    expect(service.factorial(8)).toBe(40320);
  })


});
