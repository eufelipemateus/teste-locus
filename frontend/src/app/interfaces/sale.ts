export interface Sale {
  id?: number;
  items?: SalesItem[];
  total?: number
}


export interface SalesItem  {
  id: string;
  qtd: number
}
