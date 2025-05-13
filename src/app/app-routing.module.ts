import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'artists',
    loadChildren: () => import('./artists/artists.module').then( m => m.ArtistsPageModule)
  },
  {
    path: 'opinion',
    loadChildren: () => import('./opinion/opinion.module').then( m => m.OpinionPageModule)
  },
  {
    path: 'on-note',
    loadChildren: () => import('./on-note/on-note.module').then( m => m.OnNotePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
