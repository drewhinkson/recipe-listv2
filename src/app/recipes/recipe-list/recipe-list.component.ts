import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  
})
export class RecipeListComponent implements OnInit {
 
  recipes: Recipe[];

  constructor(private RecipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.RecipeService.getRecipes();
  }

  

}
