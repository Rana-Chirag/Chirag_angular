import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandabletableexample',
  templateUrl: './expandabletableexample.component.html',
})
export class ExpandabletableexampleComponent implements OnInit {
  tabledata: any = [];
  breadscrums = [
    {
      title: "Expandable Table",
      items: ["dashboard"],
      active: "Expandable Table"
    }
  ]
  constructor() {
    this.tabledata = [
      {
        name: "Mason",
        email: "mason@test.com",
        phone: "9864785214",
        addresses: [
          {
            street: "Street 1",
            zipCode: "78542",
            city: "Kansas"
          },
          {
            street: "Street 2",
            zipCode: "78554",
            city: "Texas"
          }
        ]
      },
      {
        name: "Eugene",
        email: "eugene@test.com",
        phone: "8786541234",
      },
      {
        name: "Jason",
        email: "jason@test.com",
        phone: "7856452187",
        addresses: [
          {
            street: "Street 5",
            zipCode: "23547",
            city: "Utah"
          },
          {
            street: "Street 5",
            zipCode: "23547",
            city: "Ohio"
          }
        ]
      }
    ];

  }

  ngOnInit(): void {
  }

}
