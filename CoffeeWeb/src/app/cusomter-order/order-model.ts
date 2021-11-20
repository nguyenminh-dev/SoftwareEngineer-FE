export const currencyFormater = new Intl.NumberFormat(
    'it-IT', 
    { 
        style: "currency", 
        currency: "VND" 
    });

export class Food
{
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(id: number, name: string, description: string, price: number, image_url: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image_url = image_url;
    }
    public get priceStr(): string
    {
        return currencyFormater.format(this.price);
    }
}

export class ItemOrder
{
    food: Food;
    amount: number;
    note: string;

    private _price: number;
    public get price() : number
    {
        return this._price;
    }
    public get priceStr(): string
    {
        return currencyFormater.format(this.price);
    }

    constructor(food: Food, amount: number){
        this.food = food;
        this.amount = amount;
        this.note = "";
        this._price = amount*this.food.price;
    }

    setAmount(amount: number): void {
        this.amount = amount;
        this._price = amount*this.food.price;
    }
}

export class Order
{
    items: ItemOrder[] = [];
    public get priceStr() : string
    {
        let total = 0;
        this.items.forEach(order => {
          total += order.price;
        });
        return currencyFormater.format(total);
    }
    addItem(item: ItemOrder): void{
        this.items.unshift(item);
    }
    remove(item: ItemOrder): void{
        this.items.splice(this.items.indexOf(item), 1);
    }
}

export class Category
{
    id: number;
    name: string;
    foods: Food[]=[];
    constructor(id: number, name: string, food: Food[]){
        this.id = id;
        this.name = name;
        this.foods = food;
    }
}