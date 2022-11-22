import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsModule  } from './items/items.module';


@NgModule({
  imports: [
    CommonModule,
    ItemsModule
  ],
  exports: [
    ItemsModule
  ]
})
export class PagesModule { }
