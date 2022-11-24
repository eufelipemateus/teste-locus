

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Item } from '../interfaces/item'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor (private http: HttpClient) {}

  /**
   * Retornar Lista d eprodutos
   * @returns retornar lista de produtos
   */
  getList () {
    return this.http.get<Item[]  >('items/')
  }

  /**
   * Criar um novo produto
   *
   * @param data Item
   * @returns
   */
  postItem(data:Item) {
    return this.http.post('items/', data)
  }

  /**
   * Atualizar Item
   *
   * @param id
   * @param data
   * @returns
   */
  updateItem(id: string | null, data: Item){
    return this.http.put(`items/${id}/`, data)
  }

  deleteItem(id: string | null){
    return this.http.delete(`items/${id}/`)
  }
}
