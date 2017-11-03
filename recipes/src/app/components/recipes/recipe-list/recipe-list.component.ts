import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://lorempixel.com/50/50/technics'),
    new Recipe('A Test Recipe', 'This is simply a test', 'http://lorempixel.com/50/50/technics')
  ];

  constructor() { }

  ngOnInit() {
  }

}
