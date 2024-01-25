import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnsubscribeOnDestroyAdapter } from 'src/app/shared/UnsubscribeOnDestroyAdapter';
import { ExampleBulkUploadComponent } from '../example-bulk-upload/example-bulk-upload.component';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
})
export class TableExampleComponent extends UnsubscribeOnDestroyAdapter implements OnInit {
  // for example purpose only, local json data is used, in production a api service should be used instead.
  jsonUrl = '../../../assets/data/formDataSample.json'
  data: [] | any;
  tableload = true; // flag , indicates if data is still lodaing or not , used to show loading animation 
  csv: any[];
  addAndEditPath: string
  drillDownPath: string
  uploadComponent: any;
  csvFileName: string; // name of the csv file, when data is downloaded , we can also use function to generate filenames, based on dateTime. 
  companyCode: number;
  menuItemflag: boolean = false;
  dynamicControls = {
    add: true,
    edit: true,
    csv: false
  }
  KPICountData: { count: any; title: string; class: string; }[];
  /*Below is Link Array it will Used When We Want a DrillDown
   Table it's Jst for set A Hyper Link on same You jst add row Name Which You
   want hyper link and add Path which you want to redirect*/
  linkArray = [
  ]
  //Warning--It`s Used is not compasary if you does't add any link you just pass blank array
  /*End*/
  toggleArray = [
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
    "isActive": "Active Flag",
    "actions": "Actions"
  }

  METADATA = {
    checkBoxRequired: true,
    // selectAllorRenderedData : false,
    noColumnSort: ['checkBoxRequired']
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
      title: "Table",
      items: ["example"],
      active: "Table"
    }
  ]
  IscheckBoxRequired: boolean;
  // declararing properties

  constructor(private http: HttpClient) {
    super();
    this.csvFileName = "exampleUserData.csv";
    this.addAndEditPath = 'example/form';
    this.IscheckBoxRequired = true;
    this.drillDownPath = 'example/drillDown'
    this.uploadComponent = ExampleBulkUploadComponent;


    this.KPICountData = [
      {
        count: "10.000",
        title: 'Field 1',
        class: 'color-Bottle-light'
      },
      {
        count: "0.000",
        title: 'Field 2',
        class: 'color-Grape-light'
      }

    ];
  }

  ngOnInit(): void {
    this.http.get(this.jsonUrl).subscribe(res => {
      this.data = res;
      let tableArray = this.data['data'];
      const newArray = tableArray.map(({ hasAccess, ...rest }) => ({ isSelected: hasAccess, ...rest }));
      this.csv = newArray;
      // console.log(this.csv);
      this.tableload = false;

    });
    try {
      this.companyCode = parseInt(localStorage.getItem("CompanyCode"));
    } catch (error) {
      // if companyCode is not found , we should logout immmediately.
    }

  }

}
