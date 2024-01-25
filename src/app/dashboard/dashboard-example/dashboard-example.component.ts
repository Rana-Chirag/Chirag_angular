import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-example',
  templateUrl: './dashboard-example.component.html'
})
export class DashboardExampleComponent implements OnInit {
  jsonUrl = '../../../assets/data/docketChartData.json'
  timeLineUrl='../../../assets/data/docketLineChart.json'
  BoxData:any[]
  seriesdata:any[];
  data:any;
  labels:any[];
  pieCharCount: any[];
  dashboardControls:any[];
  toggleArray=[
  ]
  bootstrapClass=[
    'fa fa-circle col-blue msr-2',
    'fa fa-circle col-green msr-2',
    'fa fa-circle col-orange msr-2',
    'fa fa-circle col-green msr-2'
  ]
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
columnData:{ seriesdata: any[]; labels: any[];  text:string;};
pieChartData: { seriesdata: any[]; labels: any[];  text:string;};
lineChartData: { seriesdata: any[]; labels: any[];  text:string;};
advancePieChart: { seriesdata: any[]; labels: any[];  text:string;};

  constructor(private http: HttpClient) { 
    this.dashboardControls = [
      {
        label: "Docket Details Using lineChart",
        Type: "lineChart"
      },
      {
        label: "Docket Details Using barChart",
        Type: "barChart"
      },
      {
        label: "Docket Details Using PieChart",
        Type: "pieChart"
      }
      // {
      //   label: "Docket Details Using advancePieChart",
      //   Type: "advancePieChart"
      // }
    ];
    
  }

  ngOnInit(): void {
    this.dashboardData();
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
    

}
