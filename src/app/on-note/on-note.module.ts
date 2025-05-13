import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnNotePageRoutingModule } from './on-note-routing.module';

import { OnNotePage } from './on-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnNotePageRoutingModule
  ],
  declarations: [OnNotePage]
})
export class OnNotePageModule {}
