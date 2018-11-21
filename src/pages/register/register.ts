import { Component } from '@angular/core';
import { NavController, NavParams, App, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  name:string ="";
  email:string="";
  pass:any="";
  constructor(public app:App,public navCtrl: NavController, public navParams: NavParams,
    public auth:AuthProvider,
    public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
  }
  signup(){
    this.auth.register(this.name,this.email,this.pass).then(()=>{
      this.app.getRootNav().setRoot(NewsPage)
    },(err)=>{
      let alert = this.alertCtrl.create({
        title: 'login',
        subTitle: `${err}`,
        buttons: ['Dismiss']
      });
      alert.present();
    })
  }
  login(){
   return this.app.getRootNav().push(LoginPage)
  }
  check(){
    let checked=true;
    if(this.name.trim() ==='' || this.email.trim() ==='' || this.pass.trim() === '' || this.pass.length < 6){
      checked = true;
    } else{
      checked = false;
    }
    return checked;
  }
}
