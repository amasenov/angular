import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    recipes: Recipe[] = [
        new Recipe(
            'Sushi',
            'Sushi is the Japanese preparation and serving of specially prepared vinegared rice combined with varied ingredients.',
            'https://upload.wikimedia.org/wikipedia/commons/c/cc/Western_Sushi.jpg',
        [
            new Ingredient('Rice', 5),
            new Ingredient('Fish', 3),
            new Ingredient('Vegetables', 2)
        ]),
        new Recipe(
            'Carbonara',
            'Carbonara is an Italian pasta dish from Rome made with egg, hard cheese, Italian bacon (Pancetta), and pepper.',
            'https://upload.wikimedia.org/wikipedia/commons/5/50/Spaghetti_alla_Carbonara_2.jpg',
        [
            new Ingredient('Pasta', 5),
            new Ingredient('Egg', 1),
            new Ingredient('Cheese', 2),
            new Ingredient('Pancetta', 2)
        ])
      ];

    constructor(private shoppingService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShopList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }

    addrecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

}
