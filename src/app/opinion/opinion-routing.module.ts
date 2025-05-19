import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpinionPage } from './opinion.page';
import { OpinionFormComponent } from './opinion-form/opinion-form.component';

const routes: Routes = [
  {
    path: '',
    component: OpinionPage
  },
  {
    path: 'new',
    component: OpinionFormComponent,
  },
  {
    path: 'edit/:opinionId',
    component: OpinionFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpinionPageRoutingModule {}
