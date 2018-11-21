import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { NewsDetailPage } from '../news-detail/news-detail';
import { AboutUsPage } from '../about-us/about-us';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  brnews:any=[];
  data:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public firestore: AngularFirestore) {
  }

  ionViewDidLoad(){
    this.getnews();
      }

      detail(data){
        this.navCtrl.push(NewsDetailPage,{'news':data});
      }

      next(){
        this.navCtrl.push(AboutUsPage);
      }
      getnews(){
        this.firestore.collection('newsList', ref => ref.orderBy('date','desc') ).valueChanges().subscribe((data)=>{
          this.brnews=[];
          data.forEach(element=>{
          this.brnews.push(element);
          })
          console.log(this.brnews);
        },(error)=>{
          alert(error);
        });
      }
      doRefresh(refresher) {
        this.brnews=[];
        this.getnews();
    
        setTimeout(() => {
          console.log('Async operation has ended');
          refresher.complete();
        }, 2000);
      }


}
