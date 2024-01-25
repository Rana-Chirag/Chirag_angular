import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcccordionExampleComponent } from './acccordion-example/acccordion-example.component';
import { ExampleRoutingModule } from './example-routing.module';
import { TableExampleComponent } from './table-example/table-example.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { SharedModule } from '../shared/shared.module';
import { AddFormComponent } from './add-form/add-form.component';
import { FormWithoutAutocompleteComponent } from './form-without-autocomplete/simpleform';
import { TabFormExampleComponent } from './tab-form-example/tab-form-example.component';
import { ComponentsModule } from '../shared/components/components.module';
import { FilterUtils } from '../Utility/Form Utilities/dropdownFilter';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { EditAbleTableExampleComponent } from './edit-able-table-example/edit-able-table-example.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { TreeViewExampleComponent } from './tree-view-example/tree-view-example.component';
import { ExampleDrillDownReportComponent } from './example-drill-down-report/example-drill-down-report.component';
import { ExampleDocketTableComponent } from './example-docket-table/example-docket-table.component';
import { ExampleTableDailogComponent } from './example-table-dailog/example-table-dailog.component';
import { ExampleAdvanceDashboardComponent } from './example-advance-dashboard/example-advance-dashboard.component';
import { ExampleDashboardTabsComponent } from './example-dashboard-tabs/example-dashboard-tabs.component';
import { ExpandabletableexampleComponent } from './expandabletableexample/expandabletableexample.component';
import { ExampleBulkUploadComponent } from './example-bulk-upload/example-bulk-upload.component';
import { ExampleViewPrintComponent } from './example-view-print/example-view-print.component';
import { XlsxPreviewPageComponent } from './xlsx-preview-page/xlsx-preview-page.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTableExporterModule } from 'mat-table-exporter';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { xlsxutilityService } from '../Utility/xlsx Utils/xlsxutility.service';
@NgModule({
  declarations: [
    AcccordionExampleComponent,
    TableExampleComponent, AddFormComponent,
    FormWithoutAutocompleteComponent,
    TabFormExampleComponent,
    EditAbleTableExampleComponent,
    TreeViewExampleComponent,
    ExampleDrillDownReportComponent,
    ExampleDocketTableComponent,
    ExampleTableDailogComponent,
    ExampleAdvanceDashboardComponent,
    ExampleDashboardTabsComponent,
    ExpandabletableexampleComponent,
    ExampleBulkUploadComponent,
    ExampleViewPrintComponent,
    XlsxPreviewPageComponent,

  ],
  imports: [
    ExampleRoutingModule,
    CommonModule,
    SharedModule,
    SharedComponentsModule,
    ComponentsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatTableExporterModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,

  ],

  providers: [
    FilterUtils, xlsxutilityService,
  ],
})
export class ExampleModule { }