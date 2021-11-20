import { Injectable } from "@angular/core";
import { Category, Food } from "./order-model";

@Injectable({
    providedIn: 'root'
})
export class CustomerOrderService {
    private dummyCategories: Category[] = [];
    constructor(){
        for (let i = 0; i < 5; i++) {
            let foods: Food[] = [];
            for (let j = 0; j < 10; j++) {
              foods.push(new Food(
                `id_${i}${j}`,
                `food-name_${i}${j}`,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                Math.floor(Math.random()*10 +1)*1000,
                "https://i.imgur.com/2ZZfFQb.jpg"
              ));  
            }
            let category = new Category(`id_${i}`,`category_name_${i}`, foods);
            this.dummyCategories.push(category);
        }
    }

    GetMenu(): Category[] {
        return this.dummyCategories;
    }

    GetServiceWithFilter(filterStr: string): Category[] {
        if(!filterStr) return this.dummyCategories;
        var filteredCategories: Category[] = [];
        this.dummyCategories.forEach(category => {
            let filteredCategory = new Category(
                category.id,
                category.name,
                category.foods.filter(food => food.name.toLowerCase().includes(filterStr))
            );
            if(filteredCategory.foods.length > 0 ||filteredCategory.name.toLowerCase().includes(filterStr.toLowerCase())) 
                filteredCategories.push(filteredCategory);
        });
        return filteredCategories;
    }
}