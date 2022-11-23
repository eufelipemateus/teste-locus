import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsModule  } from '@pages/items';


@NgModule({
  imports: [
    CommonModule,
    ItemsModule
  ],
})
export class PagesModule { }
