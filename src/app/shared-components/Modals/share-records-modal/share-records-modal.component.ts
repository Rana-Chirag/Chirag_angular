import { Component } from '@angular/core';

@Component({
  selector: 'app-share-records-modal',
  templateUrl: './share-records-modal.component.html',
})
export class ShareRecordsModalComponent {
  activeButton: string = 'download'; // Set the initial active button

  isActive(button: string): boolean {
    return this.activeButton === button;
  }

  toggleButton(button: string) {
    this.activeButton = this.isActive(button) ? '' : button;
  }
}
