import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-modify-table-column',
  templateUrl: './generic-modify-table-column.component.html',
})
export class GenericModifyTableColumnComponent {
  checkbox = new FormControl([]);
  constructor(
    public dialogRef: MatDialogRef<GenericModifyTableColumnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index];
      if (element.show) {
        this.checkbox.value.push(element.Key);
      }
    }
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    console.log(this.data);
  }
  onSaveClick(value): void {
    if (value.event) {
      const TempcolumnKeys = [];
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        if (this.checkbox.value.includes(element.Key)) {
          TempcolumnKeys.push(element.Key);
          this.data[index].show = true;
        } else {
          this.data[index].show = false;
        }
      }
      this.dialogRef.close({
        data: this.data,
        columnKeys: TempcolumnKeys,
        event: true,
      });
    } else {
      this.dialogRef.close({
        event: false,
      });
    }
  }
}