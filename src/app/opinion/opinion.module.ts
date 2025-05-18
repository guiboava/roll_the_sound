import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpinionPageRoutingModule } from './opinion-routing.module';

import { OpinionPage } from './opinion.page';
import { OpinionFormComponent } from './opinion-form/opinion-form.component';
import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpinionPageRoutingModule,
    MaskitoDirective,
    ReactiveFormsModule,
  ],
  declarations: [
    OpinionPage,
    OpinionFormComponent,
  ]
})
export class OpinionPageModule {}
