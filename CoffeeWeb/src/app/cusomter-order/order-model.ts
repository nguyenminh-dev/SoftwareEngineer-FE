export const currencyFormater = new Intl.NumberFormat(
    'it-IT', 
    { 
        style: "currency", 
        currency: "VND" 
    });

export class Food
{
    id: string;
    name: string;
    description: string;
    price: number;
    image_url: string;
    constructor(id: string, name: string, description: string, price: number, image_url: string){
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
    items: ItemOrder[];
}

export class Category
{
    id: string;
    name: string;
    foods: Food[]=[];
    constructor(id: string, name: string, food: Food[]){
        this.id = id;
        this.name = name;
        this.foods = food;
    }
}