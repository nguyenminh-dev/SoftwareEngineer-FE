import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Drink } from "../shared/drink.model";
import { Category, Food } from "./order-model";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CustomerOrderService {
    private dummyDescription: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    private dummyImageURL: string = "https://i.imgur.com/2ZZfFQb.jpg";
    private dummyCategories: Category[] = [];
    readonly baseURL = `${environment.baseUrl}/api/Drink`;
    constructor(private http: HttpClient){
        for (let i = 0; i < 5; i++) {
            let foods: Food[] = [];
            for (let j = 0; j < 10; j++) {
              foods.push(new Food(
                i*1000+j,
                `food-name_${i}${j}`,
                this.dummyDescription,
                Math.floor(Math.random()*10 +1)*1000,
                this.dummyImageURL
              ));  
            }
            let category = new Category(i,`category_name_${i}`, foods);
            this.dummyCategories.push(category);
        }
    }

    private GetDummyMenu(): Category[]{
        return this.dummyCategories;
    }

    private GetDummyMenuWithFilter(filterStr: string): Category[]
    {
        return this.FilterMenuWithSearchString(this.dummyCategories, filterStr);
    }

    private FilterMenuWithSearchString(categories: Category[], filterString: string): Category[]
    {
        if(!filterString) return categories;
        var filteredCategories: Category[] = [];
        categories.forEach(category => {
            let includeFullCategory = category.name.toLowerCase().includes(filterString.toLowerCase());
            let filteredCategory = new Category(
                category.id,
                category.name,
                category.foods.filter(food => food.name.toLowerCase().includes(filterString.toLowerCase()) || includeFullCategory)
            );
            if(filteredCategory.foods.length > 0 || includeFullCategory) 
                filteredCategories.push(filteredCategory);
        });
        return filteredCategories;
    }

    GetMenu(): Observable<Category[]>{
        return of(this.GetDummyMenu());
        return this.http.get<Drink[]>(this.baseURL)
            .pipe(
                map((drinks: Drink[]) => {
                    var categories: Category[] = [];
                    drinks.forEach(drink => {
                        var cat = categories.find(cat => cat.id == drink.CategoryID);
                        if(cat == undefined)
                            cat = new Category(drink.CategoryID, drink.CategoryName, []);
                    });
                    drinks.forEach(drink => {
                        var cat = categories.find(cat => cat.id == drink.CategoryID);
                        if(cat == undefined)
                        {
                            cat = new Category(drink.CategoryID, drink.CategoryName, []);
                            categories.push(cat);
                        }
                        cat.foods.push(new Food(
                            drink.Id, 
                            drink.Name,
                            this.dummyDescription,
                            drink.Price,
                            this.dummyImageURL));
                    });
                    return categories;
                }
            ));
    }

    GetMenuWithFilter(filterStr: string): Observable<Category[]>{
        return this.GetMenu()
        .pipe(
            map((categories: Category[]) => {
                return this.FilterMenuWithSearchString(categories, filterStr);
            }
        ));
    }
}