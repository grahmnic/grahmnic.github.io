import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { TabsPage } from '../tabs/tabs';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  selectedClass: String = 'animated fadeInUp';


  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  stateChange() {
    setTimeout(() => {
        this.view.dismiss();
    }, 750);    
  }

  goToHome() {
    this.selectedClass = 'animated fadeOutDown';
    this.stateChange();
  }
}
