import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { exampleFormControls } from 'src/app/Models/Example Model/exampleModel';
import { FormControls } from 'src/app/Models/FormControl/formcontrol';
import { formGroupBuilder } from 'src/app/Utility/Form Utilities/formGroupBuilder';
import { exampleControl } from 'src/assets/FormControlsParameters/ExampleControlParam';
import { exampledateControl } from 'src/assets/FormControlsParameters/ExampleDaterange';

@Component({
  selector: 'app-example-dashboard-tabs-Webxpress',
  templateUrl: './example-dashboard-tabs.component.html'
})
export class ExampleDashboardTabsComponent implements OnInit {
  jsonUrl = '../../../assets/data/docketChartData.json'
  timeLineUrl='../../../assets/data/docketLineChart.json'
  BoxData:any[]
  iconCard=[
    'fas fa-cart-plus float-start',
    'fas fa-business-time float-start',
    'fas fa-chart-line float-start',
    'fas fas fa-truck-pickup float-start'
  ]

classDashboard=[
  'info-box7  bg-danger order-info-box7',
  'info-box7 bg-info order-info-box7',
  'info-box7 bg-warning order-info-box7',
  'info-box7 bg-primary order-info-box7',
]
jsonControlArray: FormControls[];  
  data: any;
  seriesdata: any[];
  labels: any[];
  fromTable: exampledateControl;
  columnData: { seriesdata: any[]; labels: any[]; text: string; };
  pieChartData: { seriesdata: any[]; labels: any[]; text: string; };
  lineChartData: { seriesdata: any[]; labels: any[]; text: string; };
  advancePieChart: { seriesdata: any[]; labels: any[]; text: string; };
  pieCharCount: { category: any; count: any; class: any; }[];
  bootstrapClass=[
    'fa fa-circle col-blue msr-2',
    'fa fa-circle col-green msr-2',
    'fa fa-circle col-orange msr-2',
    'fa fa-circle col-green msr-2'
  ]
  exampleModel: exampledateControl;
  IsUpdate: boolean;
  AddTableForm: UntypedFormGroup;
constructor(private http: HttpClient,private fb: UntypedFormBuilder,) {
  this.dashboardData()
  this.InitializeFormControl();
  this.fromTable = new exampledateControl()
}


  ngOnInit(): void {
  }
  dashboardData(){
    this.http.get(this.jsonUrl).subscribe(res => {
     this.data = res;
     let seriesData=[]
     let label=[]
     this.data.data.forEach(element => {
        seriesData.push(element.Count)
        label.push(element.DocketBranch)
     });
     this.seriesdata=seriesData;
     this.labels=label;
     this.columnData={
       seriesdata:this.seriesdata,
       labels: this.labels,
       text:'Docket'
     }
     this.pieChartData={
      seriesdata:this.seriesdata,
      labels: this.labels,
      text:'Docket'
    }
    this.lineChartData={
      seriesdata:this.seriesdata,
      labels: this.labels,
      text:'Docket'
    }
    this.advancePieChart={
      seriesdata:this.seriesdata,
      labels: this.labels,
      text:'Docket'
    }
     let pieChartDetail=[]
     this.data.data.forEach(element => {
     let pieCharCount=
        {
          category:element.DocketBranch,
          count:element.Count
        }
        pieChartDetail.push(pieCharCount);
     });

     const newArray = pieChartDetail.map((obj, index) => {
      return { category: obj.category, count: obj.count, class: this.bootstrapClass[index] };
    });
    this.pieCharCount=newArray;
    let dashboardData=[]
    newArray.forEach(element => {
      let jsonData={
        title:element.category,
        count:element.count
      }
      dashboardData.push(jsonData);
    });
    const newboxData = dashboardData.map((obj, index) => {
      return { title: obj.title, count: obj.count, class: this.classDashboard[index],icon:this.iconCard[index] };
    });
   this.BoxData=newboxData
    });
  }
    //#region  to initialize form Control
    InitializeFormControl() {

      /**
       * this function sets validation for different fields, dynamically.
       */
  
      this.exampleModel = new exampledateControl();
  
      this.jsonControlArray = this.exampleModel.getDateControls();
    
  
      this.AddTableForm = formGroupBuilder(this.fb, [this.jsonControlArray]);
  
    }
    functionCaller($event) {
      let field = $event.field;                   // the actual formControl instance
      let functionName = $event.functionName;     // name of the function , we have to call
  
      // we can add more arguments here, if needed. like as shown
      // $event['fieldName'] = field.name;
  
      // function of this name may not exists, hence try..catch 
      try {
        this[functionName]($event);
      } catch (error) {
        // we have to handle , if function not exists.
      }
    }
}
