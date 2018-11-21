import { NewsPage } from './../news/news';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email:string="";
  pass:any="";
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      public auth:AuthProvider,
      public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    this.auth.login(this.email,this.pass).then(()=>{
      this.navCtrl.setRoot(NewsPage);
    },(err)=>{
      let alert = this.alertCtrl.create({
        title: 'login',
        subTitle: `${err}`,
        buttons: ['Dismiss']
      });
      alert.present();
    })
  }
  check(){
    let checked=true;
    if(this.email.trim() ==='' || this.pass.trim() === '' || this.pass.length < 6){
      checked = true;
    } else{
      checked = false;
    }
    return checked;
  }
}
