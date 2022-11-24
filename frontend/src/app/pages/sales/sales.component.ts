import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ApiService } from '@services/api';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces/item';
import { SalesItem } from 'src/app/interfaces/sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit  {
  list:Observable<Item[]> | undefined
  edit=false;
  selectItens:Observable<Item[]> | undefined
  items:SalesItem[] = []

  constructor( private api: ApiService){}

  ngOnInit(){
    this.selectItens = this.api.getItemList()
    this.Adicionar()
  }

  Cadastrar(form: NgForm){
    this.api.createSale({items: this.items}).subscribe(()=>{
      form.reset()

    })
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
}
