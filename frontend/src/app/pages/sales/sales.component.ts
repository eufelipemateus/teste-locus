import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { ApiService } from '@services/api';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/item';
import { Sale, SalesItem } from 'src/app/interfaces/sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit  {
  list:Observable<Sale[]> | undefined
  private edit=false;
  private edit_id = '';
  selectItens:Observable<Item[]> | undefined
  items:SalesItem[] = []

  constructor( private api: ApiService){}

  ngOnInit(){
    this.selectItens = this.api.getItemList()
    this.Adicionar()
    this.loadList()
  }

  Cadastrar(form: NgForm){

    if(this.edit){
      this.api.updateSale(this.edit_id, {Items: this.items}).subscribe(()=>{
        form.reset()
        this.loadList()
      })

    }else {
      this.api.createSale({Items: this.items}).subscribe(()=>{
        form.reset()
        this.loadList()
      })
    }
  }

  Adicionar(){
    this.items.push({
      id:'',
      qtd: 0
    })
  }

  DeleteItemList(item: SalesItem){
    this.items.splice(this.items.indexOf(item), 1  )
  }

  Editar(item: Sale){
    this.edit = true
    this.edit_id = item.id || ''
    this.items =(item.Items?.map((val)=>{
      return {
        id: val.id,
        qtd:0
      }
    }) || [])
  }

  Delete(item: Sale){
    this.api.deleteSales(item.id || null).subscribe(()=>{
      this.loadList()
    })
  }

  private loadList(){
    this.list = this.api.getSalesList();
    this.edit = false
    this.edit_id = ''
    this.items = [];
    this.Adicionar();
  }
}
