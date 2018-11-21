import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeoplesDetailsPage } from './peoples-details';
@NgModule({
  declarations: [
    PeoplesDetailsPage
  ],
  imports: [
    IonicPageModule.forChild(PeoplesDetailsPageModule),

  ],
  entryComponents: [
    PeoplesDetailsPage
  ]
})
export class PeoplesDetailsPageModule {}
