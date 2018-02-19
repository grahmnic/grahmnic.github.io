import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({})
export class Result {
    //display
    dateReceived;
    sampleID;
    source;
    analyte;
    result;
    program;
    analyteID;
    unitID;
    technologyID;
    comments;
    sampleName;
    analysisDate;

    //database fields
    dboResultID;
    dboSampleID;
    dboSource;
    dboSampleName;
    dboSampleDate;
    dboAnalysisDate;
    dboProgram;
    dboAnalyteID;
    dboResult;
    dboUnitID;
    dboTechnologyID;
    dboComments;

  constructor(
    dateReceived, 
    sampleID, 
    source, 
    analyte, 
    result,
    program,
    analyteID,
    unitID,
    technologyID,
    comments,
    sampleName,
    analysisDate,
  )
  {
    this.dateReceived = dateReceived;
    this.sampleID = sampleID;
    this.source = source;
    this.analyte = analyte;
    this.result = result;
    this.program = program;
    this.analyteID = analyteID;
    this.unitID = unitID;
    this.technologyID = technologyID;
    this.comments = comments;
    this.sampleName = sampleName;
    this.analysisDate = analysisDate;

    //database fields
    this.dboResultID;
    this.dboSampleID = sampleID;
    this.dboSource = source;
    this.dboSampleName = sampleName;
    this.dboSampleDate = dateReceived;
    this.dboAnalysisDate = '1/1/2017';
    this.dboProgram = 'SPDES'; //method programCheck
    this.dboAnalyteID = '1'; //method analyteCheck
    this.dboResult = result;
    this.dboUnitID = '1'; //method unitCheck
    this.dboTechnologyID = '1'; //method methodCheck
    this.dboComments = comments;
  }

  public getDate() {return this.dateReceived;}
  public getSampleID() {return this.sampleID;}
  public getSource() {return this.source;}
  public getAnalyte() {return this.analyte;}
  public getResult() {return this.result;}
  public getSampleName() {return this.sampleName;}
  public getComments() {return this.comments;}
  public getUnitID() {return this.unitID;}

  public getResultDBO() {
    var newResult = {
      sampleID: this.dboSampleID, 
      source: this.dboSource,
      sampleName: this.dboSampleName,
      sampleDate: this.dboSampleDate,
      analysisDate: this.dboAnalysisDate,
      program: this.dboProgram,
      analyteID: this.dboAnalyteID,
      result: this.dboResult,
      unitID: this.dboUnitID,
      technologyID: this.dboTechnologyID,
      comments: this.dboComments
    }
    return newResult;
  }
}