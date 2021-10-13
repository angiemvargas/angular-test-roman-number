import { Component } from '@angular/core';
import { RomanNumeralsService } from './roman-numerals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service: RomanNumeralsService){}
  title = 'angularTesting';
  numeroRomano = ''
  numeroDeInput = 0

  getNumeroRomano(): void {
    this.numeroRomano = this.service.getNumeroRomano(this.numeroDeInput);
  }
}
