import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Result } from '../report-details/result'
import { SettingsProvider } from './../../providers/settings/setting';

 
@Component({
  selector: 'page-report-details',
  templateUrl: 'report-details.html'
})
export class ReportDetailsPage {
 
  //EVERYTHING CONTAINED IN THE REPORT-DETAILS FOLDER IS CREATED FOR TESTING PURPOSES
  report;
  sampleName;
  analytes;
  sources;
  results: Array<Result>;
  dates;
  samples;
  amounts: any;
  comments;
  monthYear;
  methods;


  selectedTheme: String;
 
  constructor(public navParams: NavParams, public setting: SettingsProvider){
    if(this.navParams.get('item')) {
      this.report = this.navParams.get('item');
    }
    else {
      console.log('error');
    }
    this.selectedTheme = this.navParams.get('currentTheme');
    this.setting.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }
 
  ionViewDidLoad() {
    this.dates = this.report.getDates();
    this.samples = this.report.getSampleID();
    this.sampleName = this.report.getSampleName();
    this.analytes = this.report.getAnalytes();
    this.sources = this.report.getSources();
    this.amounts = this.report.getAmounts();
    this.comments = this.report.getComments();
    this.monthYear = this.report.getMonthYear();
    this.methods = this.report.getMethods();
  }
}
