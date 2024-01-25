import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-example-table-dailog',
  templateUrl: './example-table-dailog.component.html'
})
export class ExampleTableDailogComponent implements OnInit {
  jsonUrl = '../../../assets/data/formDataSample.json'
  data: []|any;
  tableload = true; // flag , indicates if data is still lodaing or not , used to show loading animation 
  csv: any[];
  addAndEditPath: string
  drillDownPath:string
  uploadComponent: any;
  csvFileName: string; // name of the csv file, when data is downloaded , we can also use function to generate filenames, based on dateTime. 
  companyCode: number; 
  dynamicControls={
    add:true,
    edit:true,
    csv:true
  }
  menuItemflag:boolean=false;
  menuItems = [
    { label: 'Add'},
    { label: 'Edit'},
    // Add more menu items as needed
  ];

  /*Below is Link Array it will Used When We Want a DrillDown
   Table it's Jst for set A Hyper Link on same You jst add row Name Which You
   want hyper link and add Path which you want to redirect*/
  linkArray=[
]
//Warning--It`s Used is not compasary if you does't add any link you just pass blank array
  /*End*/
  toggleArray=[
    'activeFlag',
    'isActive',
    'isActiveFlag',
    'isMultiEmployeeRole'
  ]
  //#region create columnHeader object,as data of only those columns will be shown in table.
  // < column name : Column name you want to display on table > 
  
  columnHeader = {
      "checkBoxRequired": "",
      "id": "Sr No",
      "UserId": "User Id ",
      "UserName": "User Name",
      "EmailId": "Email Id",
      "JoiningDate": "Date",
      "isActive":"Active Flag",
      "actions": "Actions"
    }

    METADATA = {
      checkBoxRequired: true,
      // selectAllorRenderedData : false,
      noColumnSort:['checkBoxRequired']
    }
  //#endregion
  //#region declaring Csv File's Header as key and value Pair
  headerForCsv = {
    "id": "Sr No",
    "first_name": "First Code",
    "last_name": "Last Name",
    "email": "Email Id",
    "date": "Date",
    "ip_address": "IP Address",
    "address": "Address",
  }
  //#endregion

  //declaring breadscrum
  breadscrums = [
    {
      title: "TableDailog",
      items: ["example"],
      active: "Table"
    }
  ]
  IscheckBoxRequired: boolean;
  // declararing properties
 
  constructor(private http : HttpClient) { 
    this.csvFileName = "exampleUserData.csv";
    this.addAndEditPath = 'example/form';
    this.IscheckBoxRequired=true;
    this.drillDownPath='example/drillDown'
  }

  ngOnInit(): void {
    this.http.get(this.jsonUrl).subscribe(res => {
      this.data=res;
      let tableArray= this.data['data'];
      const newArray = tableArray.map(({ hasAccess, ...rest }) => ({ isSelected: hasAccess, ...rest }));
      this.csv = newArray;
      // console.log(this.csv);
      this.tableload = false;
      
    });
  }
  handleMenuItemClick(label: string) {
    Swal.fire("Your Click On"+""+label);
    // Perform some action when a menu item is clicked in the child component
  }
}
