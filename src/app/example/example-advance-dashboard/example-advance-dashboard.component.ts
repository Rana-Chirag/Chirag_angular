import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-example-advance-dashboard',
  templateUrl: './example-advance-dashboard.component.html'
})
export class ExampleAdvanceDashboardComponent implements OnInit {
  breadscrums = [
    {
      title: "Advance Dashboard",
      items: ["dashboard"],
      active: "Advance Dashboard"
    }
  ]
  @ViewChild('myTabGroup') myTabGroup: MatTabGroup;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }
  ngOnInit() {
   
  }
  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges();
  }
  GetSelectedIndex(Index: number) {
    this.myTabGroup.selectedIndex = Index;
  }
}
