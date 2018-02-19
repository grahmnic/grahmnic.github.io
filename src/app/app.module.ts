import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { myApp } from './app.component';
import { EmailComposer } from '@ionic-native/email-composer';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { ListPage } from '../pages/list/list';
import { AddItemPage } from '../pages/add-item/add-item';
import { ReportDetailsPage } from '../pages/report-details/report-details';
import { ReportMenuPage } from '../pages/report-menu/report-menu';
import { PopoverPage } from '../pages/popover/popover';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from './../providers/settings/setting';
import { Camera } from '@ionic-native/camera';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { BugReportPage } from '../pages/bug-report/bug-report';
import { DataServiceProvider } from './../providers/data-service/data-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    myApp,
    AboutPage,
    HomePage,
    SettingsPage,
    TabsPage,
    ListPage,
    AddItemPage,
    ReportDetailsPage,
    ReportMenuPage,
    PopoverPage,
    BugReportPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(myApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    myApp,
    AboutPage,
    HomePage,
    SettingsPage,
    TabsPage,
    ListPage,
    AddItemPage,
    ReportDetailsPage,
    ReportMenuPage,
    PopoverPage,
    BugReportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SettingsProvider,
    Camera,
    EmailComposer,
    ScreenOrientation,
    DataServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
