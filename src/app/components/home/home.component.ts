import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NewItemComponent } from '../new-item/new-item.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
