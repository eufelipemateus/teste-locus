import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ItemsModule { }
