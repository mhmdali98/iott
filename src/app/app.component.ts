import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import firebase from 'firebase';
import { HomePage } from '../pages/home/home';
import { NewsPage } from '../pages/news/news';
import { AngularFireAuth } from 'angularfire2/auth';
import { FCM } from '@ionic-native/fcm';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

    constructor(platform: Platform,
      statusBar: StatusBar,public afAuth: AngularFireAuth ,private fcm: FCM) {
      platform.ready().then(() => {
        try {
          this.fcm.subscribeToTopic('news');
          this.fcm.getToken().then(token => {
          });
          this.fcm.onNotification().subscribe(data => {
            if(data.wasTapped){
              alert( JSON.stringify(data) );
            } else {
              alert( JSON.stringify(data) );
            };
          },(error)=>{
            alert(error);
          });
        } catch (error) {
          alert(error);
        }
   
        const authObserver = afAuth.authState.subscribe( user => {
          if (user) {
            this.rootPage = HomePage;
            authObserver.unsubscribe();
          } else {
            this.rootPage = HomePage;
            authObserver.unsubscribe();
          }
        });
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        statusBar.styleDefault();

      });
    
  }
}

