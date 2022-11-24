import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@services/api';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  list:Observable<Item[]> | undefined
  edit=false;


  constructor( private api: ApiService){}

  ngOnInit(){
    this.loadList();
  }

  public formItens = new FormGroup({
    id:  new FormControl('', []),
    nome: new FormControl('', [
      Validators.required,
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(150),
    ]),
  })

  Cadastrar(){

    if(this.formItens.invalid) return false;

    const item =  this.formItens.value as Item

    if(this.edit){
      this.api.updateItem(item.id, item).subscribe(()=>{
        this.reload()

      })

    }else {
      this.api.postItem( item).subscribe(() =>{
        this.reload()
      })
    }
    return ;
  }

  Editar(item: Item){
    this.edit = true
    this.formItens.setValue(item)
  }

  Delete(event: unknown){
    this.reload()
  }

  private loadList(){
    this.list = this.api.getItemList()
  }

  private reload(){
    this.formItens.reset()
    this.loadList()
    this.edit = false
  }
}
