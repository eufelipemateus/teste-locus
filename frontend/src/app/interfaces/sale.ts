export interface Sale {
  id?: string;
  Items?: SalesItem[];
  total?: number
}


export interface SalesItem  {
  id: string;
  qtd: number
}
