import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpinionPageRoutingModule } from './opinion-routing.module';

import { OpinionPage } from './opinion.page';
import { OpinionFormComponent } from './opinion-form/opinion-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpinionPageRoutingModule
  ],
  declarations: [
    OpinionPage,
    OpinionFormComponent,
  ]
})
export class OpinionPageModule {}
