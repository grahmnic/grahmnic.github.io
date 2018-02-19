import { Component } from '@angular/core';
import { NavController, ToastController, ModalController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { SettingsProvider } from './../../providers/settings/setting';
import { Platform } from 'ionic-angular';
import { BugReportPage } from '../bug-report/bug-report';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SettingsProvider]
})
export class HomePage {
  public selectedTheme: String;
  body: string;
  display = '';

  constructor(public navCtrl: NavController, public platform: Platform, public modalCtrl: ModalController, public toastCtrl: ToastController, private setting: SettingsProvider, public emailComposer: EmailComposer) {
    if(!platform.is('mobile') && !platform.is('tablet')) {
      this.display = 'browser';
    }
    this.setting.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  public getTheme() {
    return this.selectedTheme;
  }

  presentToaster(error) {
    if (error) {
      let toast = this.toastCtrl.create({
        message: 'Please enter something before sending.',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
    else {
      let toast = this.toastCtrl.create({
        message: 'Email successfullly sent!',
        duration: 3000,
        position: 'top',
        cssClass: 'toast'
      });
      toast.present();
    }
  }

  presentPrompt() {
    let bugReport = this.modalCtrl.create(BugReportPage);

      bugReport.onDidDismiss((body) => {
  
            if(body == 'close'){
              return false;
            }
            else if(body) {
              this.body = body;
              this.sendEmail();              
            }
            else {
              this.presentToaster(true);
            }
      });

    bugReport.present();
    
  }

  public sendEmail() {
    this.emailComposer.isAvailable().then((available: boolean) => {
      if (available) {

      }
    });
    let email = {
      to: 'nchen@dep.nyc.gov',
      cc: 'theox@dep.nyc.gov',
      subject: 'Bug Report',
      body: this.body,
      isHtml: false
    };
    // Send a text message using default options
    this.emailComposer.open(email);
    this.presentToaster(false);
  }

}
