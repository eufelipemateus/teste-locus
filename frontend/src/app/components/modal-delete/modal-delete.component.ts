import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { ApiService } from '@services/api';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent  {

  @Input() id: string | undefined;
  @Output() deleted = new EventEmitter<unknown>();

  constructor( private api: ApiService){}

  /*
  ngOnInit(){
    console.log(this.id)
  }*/


  Delete(){
    const id = this.id || ''
    this.api.deleteItem( id ).subscribe(()=>{

      const background = document.getElementsByClassName("modal-backdrop").item(0);
      background?.classList.remove('show')
      background?.classList.add('hide')

      return this.deleted.emit(id);
    })
  }

}
