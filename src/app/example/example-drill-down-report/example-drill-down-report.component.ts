import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-example-drill-down-report',
  templateUrl: './example-drill-down-report.component.html'
})
export class ExampleDrillDownReportComponent implements OnInit {
  drillDownPath: string
  csv: any[];
  jsonUrl = '../../../assets/data/docketData.json'
  breadscrums = [
    {
      title: "DrillDownReport",
      items: ["DrillDownReport"],
      active: "Table"
    }
  ]
  columnHeader = {
    "checkBoxRequired": "",
    "DOCKNO": "Docket No",
    "party_name": "Party Name",
    "ORGNCD": "Orginal Branch",
    "DESTCD": "Destionation Branch",
    "from_loc": "From Location",
    "PKGSNO": "No of Package",
    "ACTUWT": "Actual Weight",
    "CHRGWT": "Charge Weight"
  }

  headerForCsv = {
    "DOCKNO": "Docket No",
    "party_name": "Party Name",
    "ORGNCD": "Orginal Branch",
    "DESTCD": "Destionation Branch",
    "from_loc": "From Location",
    "PKGSNO": "No of Package",
    "ACTUWT": "Actual Weight",
    "CHRGWT": "Charge Weight"
  }
  linkArray = []
  toggleArray = [
    'activeFlag',
    'isActive',
    'isActiveFlag',
    'isMultiEmployeeRole'
  ]
  tableload: boolean;
  nestedDetails: any;
  data: [] | any;
  filterData: [] | any;
  METADATA = {
    checkBoxRequired: true,
    // selectAllorRenderedData : false,
    noColumnSort: ['checkBoxRequired']
  }
  dynamicControls = {
    add: false,
    edit: false,
    csv: true
  }

  constructor(private Route: Router, private http: HttpClient) {
    if (this.Route.getCurrentNavigation()?.extras?.state != null) {
      this.nestedDetails = this.Route.getCurrentNavigation()?.extras?.state.data;
      console.log(this.nestedDetails);
      

    }
    this.tableload = true;
    this.drillDownPath = 'example/drillDown'
    this.getData()
  }

  ngOnInit(): void {


    try {
      //this.companyCode = parseInt(localStorage.getItem("CompanyCode"));
    } catch (error) {
      // if companyCode is not found , we should logout immmediately.
    }

  }
  getData() {
    this.http.get(this.jsonUrl).subscribe(res => {
      this.filterData = res
      this.data = this.filterData.data.filter((x) => x.DESTCD == this.nestedDetails.DocketBranch)
      this.csv = this.data;
      // console.log(this.csv);
      this.tableload = false;

    });
  }
}


