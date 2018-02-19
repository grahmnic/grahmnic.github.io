import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({})
export class Source {
    source;
    designFlow;
    unitID;
    ID;

  constructor(
    source,
    designFlow,
    unitID,
    ID
  ) 
  {
    this.source = source;
    this.designFlow = designFlow;
    this.unitID = unitID;
    this.ID = ID;
  }

  public getSource() {
      return this.source;
  }
}