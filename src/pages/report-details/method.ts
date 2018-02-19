import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Technology } from '../report-details/technology';

@Component({})
export class Method {
    methodID;
    analyte;
    method_name;
    method_code;
    matrix;
    MDL;
    LOQ;
    start_date;
    end_date;
    unit;
    technologyID;

  constructor(methodID, analyte, method_name, method_code, matrix, MDL, LOQ, start_date, end_date, unit, technologyID) {
    this.methodID = methodID;
    this.analyte = analyte;
    this.method_name = method_name;
    this.method_code = method_code;
    this.matrix = matrix;
    this.MDL = MDL;
    this.LOQ = LOQ;
    this.start_date = start_date;
    this.end_date = end_date;
    this.unit = unit;
    this.technologyID = technologyID;
  }

}