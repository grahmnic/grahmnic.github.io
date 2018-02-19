import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({})
export class Analyte {
    analyteID;
    analyte;

  constructor(analyte, analyteID) {
      this.analyte = analyte;
      this.analyteID = analyteID;
  }

  public getAnalyte() {return this.analyte;}
}