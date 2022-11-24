import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    SalesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SalesModule { }
