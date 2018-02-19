import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({})
export class Report {
    sampleName;
    sourceOptions;
    analyteOptions;
    methods;
    unit;
    results;
    date;
    sampleID;
    comments;
    amounts;
    monthYear;

  constructor(
    sampleName,
    sourceOptions,
    analyteOptions,
    methods,
    unit,
    results,
    date,
    sampleID,
    comments,
    amounts,
    monthYear
  ) 
  {
    this.sampleName = sampleName;
    this.sourceOptions = sourceOptions;
    this.analyteOptions = analyteOptions;
    this.methods = methods;
    this.unit = unit;
    this.results = results;
    this.date = date;
    this.sampleID = sampleID;
    this.comments = comments;
    this.amounts = amounts;
    this.monthYear = monthYear;
  }

  public getSampleName() {
      return this.sampleName;
  }

  public getSources() {
      return this.sourceOptions;
  }

  public getAnalytes() {
      return this.analyteOptions;
  }

  public getUnit() {
      return this.unit;
  }

  public getResults() {
      return this.results;
  }

  public getDates() {
      return this.date;
  }

  public getSampleID() {
      return this.sampleID;
  }

  public getComments() {
      return this.comments;
  }

  public getAmounts() {
      return this.amounts;
  }

  public getMonthYear() {
      return this.monthYear;
  }

  public getMethods() {
      return this.methods;
  }
}