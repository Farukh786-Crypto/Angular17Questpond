export class Product {
  id!: number;
  code!: string;
  name!: string;
  price!: number;

  constructor(id?: number, code?: string, name?: string, price?: number) {
    this.id = id ?? 0;
    this.code = code ?? '';
    this.name = name ?? '';
    this.price = price ?? 0;
  }
}
