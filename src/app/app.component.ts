import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { LoadingController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from './../providers/settings/setting';
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { Report } from '../pages/report-details/report';

@Component({
  templateUrl: 'app.html'
})
export class myApp {
  rootPage: any = TabsPage;
  loader: any;
  selectedTheme: String;

  constructor(platform: Platform, statusBar: StatusBar, app: App, splashScreen: SplashScreen, private settings: SettingsProvider, public loadingCtrl: LoadingController, public storage: Storage) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
    statusBar.overlaysWebView(true);
    statusBar.styleBlackOpaque();
    this.presentLoading();



    platform.ready().then(() => {
      var temp;
      this.storage.get('introShown').then(data => {
        temp = data;
        this.storage.clear();
        this.storage.set('introShown', temp);
        this.storage.get('introShown').then((result) => {
          if (result) {
            this.rootPage = TabsPage;
          }
          else {
            this.rootPage = TabsPage;
          }

          this.loader.dismiss();
        });
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });

    platform.registerBackButtonAction(() => {
      let nav = app.getActiveNav();
      let activeView: ViewController = nav.getActive();

      if (activeView != null) {
        if (nav.canGoBack()) {
          nav.pop();
        }
        else if (typeof activeView.instance.backButtonAction === 'function') {
          activeView.instance.backButtonAction();
        }
        else {
          nav.parent.select(0);
        }
      }
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Loading. . ."
    });



    this.loader.present();
  }
}
