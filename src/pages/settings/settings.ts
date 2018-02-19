import { Component } from '@angular/core';
import { NavController, ModalController, Platform } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/setting';
import { Storage } from '@ionic/storage';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  selectedTheme: String;
  validatorMenu = false;

  constructor(public navCtrl: NavController, private setting: SettingsProvider, public platform: Platform, public storage: Storage, public modalCtrl: ModalController) {
      this.setting.getActiveTheme().subscribe(val => this.selectedTheme = val);
    }

    toggleAppTheme() {
    if (this.selectedTheme === 'dark') {
      this.setting.setActiveTheme('light');
    } else {
      this.setting.setActiveTheme('dark');
    }
  }

  toggleTutorial() {
    let aboutModal = this.modalCtrl.create(AboutPage);

    aboutModal.present();
  }

  toggleResultStorage() {
    this.storage.set('introShown', false);
  }

  toggleValidatorsMenu() {
    //validators: analyte fields, sampleID, dateReceived, method, default unit
    this.storage.set('validators', [true, true, true, true, true]);
    if(this.validatorMenu == true) {
      //this.validatorMenu = false;
      this.validatorMenu = true;
    }
    else {
      this.validatorMenu = true;
    }
  }
}