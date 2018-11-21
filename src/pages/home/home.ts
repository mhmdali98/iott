import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public app:App) {

  }
  start(){
   return this.app.getRootNav().setRoot(RegisterPage);
  }

}
