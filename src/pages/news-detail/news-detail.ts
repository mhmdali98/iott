import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-detail',
  templateUrl: 'news-detail.html',
})
export class NewsDetailPage {
  news={
    title:'',
    image:'',
    desc:''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news.title = this.navParams.get('news').title;
    this.news.image = this.navParams.get('news').image;
    this.news.desc = this.navParams.get('news').Description;
  }

  ionViewDidLoad() {
    console.log(' NewsDetailPage' + this.navParams.get('news').id);


  }

}
