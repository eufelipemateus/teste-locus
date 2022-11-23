

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
  getItensList () {
    return this.http.get<Item[]  >('items/')
  }

  /**
   * Criar um novo produto
   *
   * @param data Item
   * @returns
   */
  postCreateIteam (data:Item) {
    return this.http.post('items/', data)
  }
}
