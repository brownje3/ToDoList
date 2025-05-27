import { Component, Input } from '@angular/core';
import { ListItem } from '../../interfaces/list-item';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatCheckboxModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() item!:ListItem
  constructor(public serv:TodoService){}
}
