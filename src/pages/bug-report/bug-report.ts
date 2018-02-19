import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-bug-report',
  templateUrl: 'bug-report.html'
})
export class BugReportPage {
  body: String;

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  sendBug() {
      this.view.dismiss(this.body);
  }

  close() {
      this.view.dismiss('close')
  }
}