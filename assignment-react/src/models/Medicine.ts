// Medicine class with properties: id, Title, Price, ExpiryDate
export class Medicine {
  id: number;
  Title: string;
  Price: number;
  ExpiryDate: Date;

  constructor(id: number, title: string, price: number, expiryDate: Date) {
    this.id = id;
    this.Title = title;
    this.Price = price;
    this.ExpiryDate = expiryDate;
  }
}
