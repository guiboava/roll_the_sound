import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPageRoutingModule } from './order-routing.module';

import { OrderPage } from './order.page';
import { OrderFormComponent } from './order-form/order-form.component';
import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPageRoutingModule,
    MaskitoDirective,
    ReactiveFormsModule,
  ],
  declarations: [
    OrderPage,
    OrderFormComponent,
  ]
})
export class OrderPageModule {}
