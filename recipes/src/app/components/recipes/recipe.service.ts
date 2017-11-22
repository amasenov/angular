import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
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

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShopList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }
}