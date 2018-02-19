import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';
import { SettingsPage } from '../settings/settings';
import { ReportMenuPage } from '../report-menu/report-menu';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  homeCaption = "This is the home page.";
  homeActive;

  tab1Root = HomePage;
  tab2Root = ReportMenuPage;
  tab3Root = SettingsPage;

  constructor(public navCtrl: NavController, public storage: Storage) {
    this.storage.get('introShown').then((result) => {
        if(!result) {
          this.navCtrl.push(AboutPage);
          this.storage.set('introShown', true);
        }
    });
  }
}
