import { Injectable } from '@angular/core';
import { ListItem } from '../interfaces/list-item';
import { isEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor() {}
  public items:ListItem[] = []

  addItem(item:ListItem){
    this.items.push(item)
    console.log(this.items)
    // sessionStorage.setItem("ToDoItems", JSON.stringify(this.items));
  }

  removeItem(item:ListItem){
    const position = this.items.indexOf(item)
    this.items.splice(position, 1)
  }
}
