import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ItemsComponent } from '@pages/items';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    component: ItemsComponent,
    //canActivate: []
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
