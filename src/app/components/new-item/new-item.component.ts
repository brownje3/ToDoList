import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ListItem } from '../../interfaces/list-item';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-new-item',
  imports: [FormsModule, MatFormFieldModule, MatLabel,
    MatInputModule, MatButtonModule, MatDialogActions,
    MatDialogModule
  ],
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.scss'
})
export class NewItemComponent {
 
  public newItem:ListItem = {name:"", description:""}
  readonly dialog = inject(MatDialogRef<NewItemComponent>)

  constructor(public serv : TodoService){}
  
  createNewItem(n: ListItem){
    console.log(this.newItem)
    this.serv.addItem(n)
  }

  submit(){
    if (this.newItem.description.length > 1 && this.newItem.name.length > 1){
      this.createNewItem(this.newItem)
      this.dialog.close()
    }
  }

  closeClick(){
    this.dialog.close()
  }
}
