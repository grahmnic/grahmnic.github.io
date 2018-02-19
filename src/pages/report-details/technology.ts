import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({})
export class Technology {
    technologyID;
    method_name;
    manufacturer;
    model;
    serial_number;
    instrument_designation;

  constructor(technologyID, method_name, manufacturer, model, serial_number, instrument_designation) {
    this.technologyID = technologyID;
    this.method_name = method_name;
    this.manufacturer = manufacturer;
    this.model = model;
    this.serial_number = serial_number;
    this.instrument_designation = instrument_designation;
  }
}