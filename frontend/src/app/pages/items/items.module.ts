import { NgModule } from '@angular/core';
import { ItemsComponent } from './items.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ItemsModule { }
