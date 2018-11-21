import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {
  subject='';
  body='';
  constructor(public navCtrl: NavController, public navParams: NavParams,private emailComposer: EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }

  send(){
    let email = {
      to: 'kiotik.info@gmail.com',
      subject: this.subject,
      body: this.body,
      isHtml: true
    };
    this.emailComposer.open(email);
  }
  check(){
   let isdisabled = true;
   if(this.subject.slice() =='' || this.body.slice() ==''){
     isdisabled=true;
   } else{
     isdisabled=false;
   }
   return isdisabled;
  }
}
