import { TestBed } from '@angular/core/testing';

import { RomanNumeralsService } from './roman-numerals.service';

describe('RomanNumeralsService', () => {
  let service: RomanNumeralsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RomanNumeralsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('numero 1 en romanos', () => {
    const romano = service.getNumeroRomano(1);
    expect(romano).toEqual("I")
  });

  it('numero 4 en romanos', () => {
    const romano = service.getNumeroRomano(4);
    expect(romano).toEqual("IV")
  });

  it('numero 5 en romanos', () => {
    const romano = service.getNumeroRomano(5);
    expect(romano).toEqual("V")
  });

  it('numero 9 en romanos', () => {
    const romano = service.getNumeroRomano(9);
    expect(romano).toEqual("IX")
  });

  it('numero 10 en romanos', () => {
    const romano = service.getNumeroRomano(10);
    expect(romano).toEqual("X")
  });

  it('numero 40 en romanos', () => {
    const romano = service.getNumeroRomano(40);
    expect(romano).toEqual("XL")
  });

  it('numero 50 en romanos', () => {
    const romano = service.getNumeroRomano(50);
    expect(romano).toEqual("L")
  });

  it('numero 90 en romanos', () => {
    const romano = service.getNumeroRomano(90);
    expect(romano).toEqual("XC")
  });

  it('numero 100 en romanos', () => {
    const romano = service.getNumeroRomano(100);
    expect(romano).toEqual("C")
  });

  it('numero 400 en romanos', () => {
    const romano = service.getNumeroRomano(400);
    expect(romano).toEqual("CD")
  });

  it('numero 500 en romanos', () => {
    const romano = service.getNumeroRomano(500);
    expect(romano).toEqual("D")
  });

  it('numero 900 en romanos', () => {
    const romano = service.getNumeroRomano(900);
    expect(romano).toEqual("CM")
  });

  it('numero 1000 en romanos', () => {
    const romano = service.getNumeroRomano(1000);
    expect(romano).toEqual("M")
  });


});
