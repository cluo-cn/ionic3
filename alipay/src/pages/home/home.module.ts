/**
 * Created by cluo on 2017/8/2.
 */
import {NgModule} from '@angular/core';

import {HomePage} from './home';
import {IonicPageModule} from "ionic-angular";

@NgModule({
  exports: [HomePage],
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)],
})
export class homeModule {
}
