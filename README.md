# BoilerPlate-Angular
A boilerplate/starter project for quickly building angular webapp and web component.https://www.youtube.com/watch?v=2TjvlVafpw4

By running a single command, you will get a production-ready angular app installed and fully configured on your machine. The app comes with many built-in features, such as login, most used standard components , unit and integration tests, continuous integration, etc.
For more details, check the features list below.

**Quick Start**  

Just clone this repository in your local machine and run npm install at the root of repository 

## Table of Contents

1. [Features](#features)
2. [Commands](#commands)
3. [ProjectStructure](#projectstructure)
4. [StandardComponents](#standardcomponent)
5. [License](#license)

* #features  
* Complete full scale angular project with relevant example to replicate 
* Repository of Standard Components like Form , Menu , Dashboard, Charts,Table, Editable Table,  Table with Action Menu bar etc
* No Need to Code from Scratch, use standard component to build any user interface 
* Data are fetched through API, for that services are in place, only method need to be called for any different usecase
* Data Models are also shown, the same can be utilized 



It is repository of mostly used standard component, across different webxpress product. They are
Table
<!-- Loading Generic table as parent component and passing  required data-->
        <!--
        columnHeader: a object that contains only that pair of column id:title that are to be shown on dashBoard.
        tableData : api Response.
        addAndEditPath : path of the page where Add and edit is handled.
        uploadComponent : REference of component, which is to be opened in dialog box.
        csvHeaders : a object that contains ordered pair of column id:title that are to be shown in csv file.
        csvFileName : Name of the csv File.
        activeFunction : function refrence that takes data from child , in order to do changes in parent (current) component.
         -->
        <generic-table-webxpress *ngIf="!tableload" 
            [columnHeader]="columnHeader" 
            [tableData]="csv"
            [addAndEditPath]="addAndEditPath"
            [uploadComponent]="uploadComponent"
            [csvHeaders]="headerForCsv"
            [csvFileName]="csvFileName"
            (onFlagChange) = "IsActiveFuntion($event)" 
            >
        </generic-table-webxpress>
        <!-- form -->
       <app-common-wrapper-webxpress [breadscrums]="breadscrums">
          <form [formGroup]="AddForm">
              <app-form-without-auto-complete-webxpress 
              [formData]="jsonControlArray" 
              [form]="AddForm"
              [showSaveAndCancelButton]="showSaveAndCancelButton" (functionCallEmitter)="functionCallHandler($event)">
              </app-form-without-auto-complete-webxpress>
          </form>
        </app-common-wrapper-webxpress> 
       <!-- Dashboard -->
        <app-generic-card-webxpress [boxData]="BoxData" ></app-generic-card-webxpress>
          <app-generic-chart-dashboard-webxpress [columnData]="columnData" [pieChartData]="pieChartData" [lineChartData]="lineChartData"                  [advancePieChart]="advancePieChart" [dashboardControls]="dashboardControls">
        </app-generic-chart-dashboard-webxpress>
       <!-- Accordion -->
        <app-common-wrapper-webxpress [breadscrums]="breadscrums" > 
          <form [formGroup]="accordionForm" >
              <generic-accordion-webxpress 
              [AccordionForm]="accordionForm"
              [accordionGroup]="accordionData"
              (functionCallEmitter)="functionCallHandler($event)" >
              </generic-accordion-webxpress>
          </form>
        </app-common-wrapper-webxpress>
       <!-- Menu -->
        <app-common-wrapper-webxpress [breadscrums]="breadscrums">
          <app-tree-view-webxpress [data]="data" (dataEvent)="getTreeviewData($event)"></app-tree-view-webxpress>
        </app-common-wrapper-webxpress> 
       <!-- tab Structure --> 
        <app-common-wrapper-webxpress>
            <form [formGroup]="tabForm">
                <generic-tabbed-form-webxpress [tabForm]="tabForm" [tabGroup]="tabData"
                    (functionCallEmitter)="functionCallHandler($event)">
                </generic-tabbed-form-webxpress>
            </form>
        </app-common-wrapper-webxpress>


Every standard component has a well defined example with relevant data and clearly demonstrate how to implement it as per need.  We need to only these standard component to develop User Interface and logic behind it. 




	
	
	
