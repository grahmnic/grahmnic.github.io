import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, ToastController, ModalController, AlertController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ListPage } from '../list/list';
import { SettingsProvider } from '../../providers/settings/setting';


/**
 * Generated class for the ViewReportsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-report-menu',
  templateUrl: 'report-menu.html',
})
export class ReportMenuPage {
  public items = [];
  reportTypes;
  reportWMQTypes;
  reportIWTypes;  
  
  reportType;
  subType;

  menuCheck = false;
  typeCheck:boolean = true;
  subCheck:boolean = true;

  modal: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public platform: Platform, public toastCtrl: ToastController, public modalCtrl: ModalController, public setting: SettingsProvider) {
    this.reportTypes = ['DLSS', 'BSS', 'PE', 'IW', 'test'];
    this.reportWMQTypes = ['W', 'M', 'Q'];
    this.reportIWTypes = ['IPP Metals(1)','IPP Metals(2)', 'Cr+6', 'Cyanide, Oil, and Grease'];
  }

  ionViewWillLeave() {
    this.menuCheck = false;
    this.typeCheck = true;
    this.subCheck = true;
  }

  reportTypeCheck() {
    if(this.reportType == 'IW') {
      return 'iw';
    }
    else if(this.reportType == 'PE') {
      return 'pe';
    }
    else {
      return '';
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error: Template Navigation Invalid',
      subTitle: 'Please fill out the report type and/or the subtype.',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Information successfully saved!',
      duration: 3000,
      position: 'top',
      cssClass: 'toast'
    });
    toast.present();
  }

  public getItems() {
    return this.items;
  }

  addItem(){
    if((this.subType && this.reportType == 'PE') || this.reportType == 'DLSS' || this.reportType == 'BSS' || this.reportType == 'IW' || this.reportType == 'test') {
      this.modal = this.modalCtrl.create(AddItemPage, {sampleName: this.reportType, subType: this.subType, currentTheme: this.setting.getActiveTheme()});
  
      this.modal.onDidDismiss((item) => {
  
            if(item){
              this.saveItem(item);
              this.presentToast();
            }
      });
  
      this.modal.present();
    }
    else {
      if(!this.subType) {
        this.subCheck = false;
      }
      else {
        this.subCheck = true;
      }
      if(!this.reportType) {
        this.typeCheck = false;
      }
      else {
        this.typeCheck = true;
      }
      this.presentAlert();
    }
  }

  getType(subType) {
    if(subType == 'W') {
      return 'Weekly';
    }
    else if(subType == 'M') {
      return 'Monthly';
    }
    else if(subType == 'Q') {
      return 'Quarterly';
    }
  }

  isDisabled() {
    if(this.reportType == 'PE' || this.reportType == 'IW') {
      return true;
    }
    else {
      return false;
    }
  }

  viewItems(){
    let viewModal = this.modalCtrl.create(ListPage, {items: this.items, currentTheme: this.setting.getActiveTheme()});
 
    viewModal.present();
  }

  saveItem(item){
    this.items.push(item);
  }

  openMenu() {
    this.menuCheck = true;
  }

}
