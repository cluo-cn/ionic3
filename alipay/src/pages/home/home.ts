import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {Http} from '@angular/http';
declare let cordova;


@IonicPage({
  name: 'page-home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  html: string = "";
  url: string = 'http://10.43.15.77:8080/alipay.trade.wap.pay-java-utf-8/wappay/data.jsp';

  constructor(private http: Http) {
  }

  getData() {
    this.http.get(this.url).subscribe(obj => {
      this.html = obj.text();
    });
  }

  goToPay() {
    cordova.plugins.alipay.payment(this.html, (success) => {
      console.log(success);
      alert(success);
    }, (error) => {
      console.log(error);
    });
  }

}
