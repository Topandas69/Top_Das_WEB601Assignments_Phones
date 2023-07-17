import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { AddContentDialogComponent } from '../add-content-dialog/add-content-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newContent: any = {};
  @Output() onCreation = new EventEmitter<Content>();

  constructor(public dialog:MatDialog){}

  addContent(){
    this.onCreation.emit(this.newContent);
    this.newContent = {};
  }

  openDialog():void{
    const dialogRef = this.dialog.open(AddContentDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.newContent = result;
        this.addContent();
      }
    });
  }
}