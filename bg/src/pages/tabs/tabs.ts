import { Component } from '@angular/core';
import {IonicPage} from "ionic-angular";

@IonicPage({
  name : 'page-tabs',
  segment : 'tab'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'page-home';
  tab2Root = 'page-about';
  tab3Root = 'page-contact';

  constructor() {

  }
}
