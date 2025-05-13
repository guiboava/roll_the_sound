import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnNotePage } from './on-note.page';

const routes: Routes = [
  {
    path: '',
    component: OnNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnNotePageRoutingModule {}
