import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistsPageRoutingModule } from './artists-routing.module';

import { ArtistsPage } from './artists.page';
import { ArtistsFormComponent } from './artists-form/artists-form.component';
import { MaskitoDirective } from '@maskito/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistsPageRoutingModule,
    MaskitoDirective,
  ],
  declarations: [ArtistsPage,
    ArtistsFormComponent,
  ]
})
export class ArtistsPageModule {}
