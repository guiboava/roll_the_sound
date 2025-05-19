import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistsPageRoutingModule } from './artists-routing.module';

import { ArtistsPage } from './artists.page';
import { ArtistsFormComponent } from './artists-form/artists-form.component';
import { MaskitoDirective } from '@maskito/angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistsPageRoutingModule,
    MaskitoDirective,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [ArtistsPage,
    ArtistsFormComponent,
  ]
})
export class ArtistsPageModule {}
