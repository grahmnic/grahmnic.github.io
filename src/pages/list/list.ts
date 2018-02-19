import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ModalController, NavController, ToastController, NavParams, ViewController} from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ReportDetailsPage } from '../report-details/report-details';
import { Report } from '../report-details/report';
import { Result } from '../report-details/result';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public items;
 
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public modalCtrl: ModalController, public view: ViewController, public navParams: NavParams) {

  }
 
  ionViewDidEnter(){
    this.items=this.navParams.get('items');
  }
 
  viewItem(item){
    this.navCtrl.push(ReportDetailsPage, {
      item: item
    });
  }

  removeItem(item){
    for(var i = 0; i < this.items.length; i++) {
 
      if(this.items[i] == item){
        this.items.splice(i, 1);
      }
 
    }
    this.presentToast(); 
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Report successfullly deleted!',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  close(){
    this.view.dismiss();
  }
}
