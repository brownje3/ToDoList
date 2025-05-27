import { Component, inject} from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NewItemComponent } from '../new-item/new-item.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  imports: [CommonModule, CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  constructor(public serv : TodoService){}

  readonly dialog = inject(MatDialog);

  open(){
      this.dialog.open(NewItemComponent,
        {
          height: '20rem',
          width: '200px'
        }
      )
    }
}
