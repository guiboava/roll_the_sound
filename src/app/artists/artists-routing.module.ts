import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsPage } from './artists.page';
import { ArtistsFormComponent } from './artists-form/artists-form.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistsPage
  },
  {
    path: 'new',
    component: ArtistsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsPageRoutingModule {}
