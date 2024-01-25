import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TREE_DATA } from '../../shared-components/tree-view/TREE_DATA';
import { utilityService } from 'src/app/Utility/utility.service';

@Component({
  selector: 'app-tree-view-example',
  templateUrl: './tree-view-example.component.html'
})
export class TreeViewExampleComponent implements OnInit {
  data:any;
  breadscrums = [
    {
      title: "Tree-View",
      items: ["example"],
      active: "Tree-View",
    },
  ];
  constructor(private service: utilityService) { 
    this.data = TREE_DATA;
  }


  ngOnInit(): void {
  }
  /*Below the method for the use child component data is used to the parent compant data which is retriev used @output() EventEmitter*/
  getTreeviewData(event){
    this.service.exportData(event)

  }
}
