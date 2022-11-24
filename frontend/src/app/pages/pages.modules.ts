import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsModule  } from '@pages/items';
import { SalesModule } from '@pages/sales';

@NgModule({
  imports: [
    CommonModule,
    ItemsModule,
    SalesModule
  ],
})
export class PagesModule { }
