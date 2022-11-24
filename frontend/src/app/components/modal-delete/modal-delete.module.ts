import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDeleteComponent } from './modal-delete.component';

@NgModule({
  declarations: [ModalDeleteComponent],
  exports: [ ModalDeleteComponent ],
  imports: [CommonModule]
})
export class ModalDeleteModule { }
