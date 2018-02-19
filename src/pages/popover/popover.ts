import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'popover.html'
})
export class PopoverPage {
  methods;
  selection;

  constructor(public navParams: NavParams, public view: ViewController) {
    this.methods = this.navParams.get('methods');
  }

  close() {
      this.view.dismiss('n/a');
  }

  select(method) {
    this.selection = method;
    this.view.dismiss(this.selection);
  }
}