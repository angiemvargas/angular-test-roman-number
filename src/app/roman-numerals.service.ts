import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanNumeralsService {

  constructor() { }

   getNumeroRomano(number): string {

    const romanos = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    }

    let resultado = ""
    for (let r in romanos) {
      resultado += r.repeat(Math.floor( number / romanos[r]))
      number = number % romanos[r]
    }
    return resultado
  }

}
