import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients : Ingredient[] = [new Ingredient('Basmati Rice',1),
      new Ingredient('Spaghetti',10) ]

  constructor() { }

  ngOnInit(): void {
  }

}
