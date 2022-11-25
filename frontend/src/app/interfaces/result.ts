import { Item } from "./item";
import { Sale } from "./sale";

export interface Result {
  count: number;
  next: string | null
  previous: string | null,
  results: Item[] | Sale[]
}
