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

  constructor( private api: ApiService){}

  ngOnInit(){
    this.loadList();
  }

  public formItens = new FormGroup({
    nome: new FormControl('', [
      Validators.required,
    ]),
    price: new FormControl('', [
      Validators.required,
      Validators.min(0)
    ]),
    description: new FormControl('', [
      Validators.maxLength(150),
    ]),
  })

  Cadastrar(){

    if(this.formItens.invalid) return false;

    const item =  this.formItens.value as Item

    this.api.postCreateIteam( item).subscribe(() =>{
      this.formItens.reset()
      this.loadList()
    })

    return ;
  }

  private loadList(){
    this.list = this.api.getItensList()
  }
}
