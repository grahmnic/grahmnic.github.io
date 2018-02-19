import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({})
export class Unit {
    unitID;
    unit;

  constructor(unitID, unit) {
    this.unitID = unitID;
    this.unit = unit;
  }
}