import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableExampleComponent } from './table-example/table-example.component';
import { AddFormComponent } from './add-form/add-form.component';
// import { AddFormComponentEmp } from './add-form-emp/add-form-emp.component';

import { AddFormEmpComponent } from './add-form-emp/add-form-emp.component';
import { FormWithoutAutocompleteComponent } from './form-without-autocomplete/simpleform';
import { AcccordionExampleComponent } from './acccordion-example/acccordion-example.component';
import { TabFormExampleComponent } from './tab-form-example/tab-form-example.component';
import { EditAbleTableExampleComponent } from './edit-able-table-example/edit-able-table-example.component';
import { TreeViewExampleComponent } from './tree-view-example/tree-view-example.component';
import { ExampleDrillDownReportComponent } from './example-drill-down-report/example-drill-down-report.component';
import { ExampleDocketTableComponent } from './example-docket-table/example-docket-table.component';
import { ExampleTableDailogComponent } from './example-table-dailog/example-table-dailog.component';
import { ExampleAdvanceDashboardComponent } from './example-advance-dashboard/example-advance-dashboard.component';
import { ExpandabletableexampleComponent } from './expandabletableexample/expandabletableexample.component';
import { ExampleBulkUploadComponent } from './example-bulk-upload/example-bulk-upload.component';
import { ExampleViewPrintComponent } from './example-view-print/example-view-print.component';
const routes: Routes = [
  { path: "table", component: TableExampleComponent },
  { path: "form", component: AddFormComponent },
  { path: "Registration", component: AddFormEmpComponent },

  { path: "simpleform", component: FormWithoutAutocompleteComponent },
  { path: "accordion", component: AcccordionExampleComponent },
  { path: "tabForm", component: TabFormExampleComponent },
  { path: "editTable", component: EditAbleTableExampleComponent },
  { path: "TreeView", component: TreeViewExampleComponent },
  { path: "drillDown", component: ExampleDrillDownReportComponent },
  { path: "DocketTable", component: ExampleDocketTableComponent },
  { path: "TableDailog", component: ExampleTableDailogComponent },
  { path: "AdvanceDashboard", component: ExampleAdvanceDashboardComponent },
  { path: "expandtable", component: ExpandabletableexampleComponent },
  { path: "UserBulkUpload", component: ExampleBulkUploadComponent },
  { path: "viewprint", component: ExampleViewPrintComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRoutingModule { }


