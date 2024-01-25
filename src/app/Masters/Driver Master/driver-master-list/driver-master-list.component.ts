import { Component, OnInit } from '@angular/core';
import { DriverMasterService } from 'src/app/core/service/Masters/Driver Master/driver-master.service';
import { SnackBarUtilityService } from 'src/app/core/service/Utility/SnackBarUtility.service';

@Component({
  selector: 'app-driver-master-list',
  templateUrl: './driver-master-list.component.html'
})
export class DriverMasterListComponent implements OnInit {

  error: any
  METADATA = {
    checkBoxRequired: false,
    selectAllorRenderedData : false,
    noColumnSort:[]
  }
  //#region declaring table's Column Header as key and value Pair
  columnHeader =
    {
      "srNo": "Sr No",
      "manual_Driver_Code": "Manual Driver Code",
      "driver_Name": "Driver Name",
      "license_No": "License No",
      "valdity_dt": "Valdity Date",
      "activeFlag": "Active Flag",
      "actions": "Actions"
    }
  //#endregion
  //#region declaring Csv File's Header as key and value Pair
  headerForCsv = {
    "driver_Name": "Driver Name",
    "dFather_Name": "Driver's Father Name",
    "manual_Driver_Code": "Manual Driver Code",
    "driver_Location": "Location",
    "vehno": "Vehicle Number",
    "vendorDriverCode": "Vendor Driver Code",
    "telno": "Contact Number",
    "d_DOB": "Date Of Birth",
    "guarantor_Name": "Guarantor Name",
    "guarantorMobileNo": "Guarantor Mobile No",
    "driverDesc": "Driver Category",
    "joiningDate": "Date Of Joining",
    "reJoiningDate": "Date Of Rejoining",
    "activeFlag": "ActiveFlag",
    "license_No": "License No",
    "issue_By_RTO": "Issued By RTO",
    "valdity_dt": "Validity Date",
    "isBlackListed": "BlackListed",
    "blackListedReason": "Blacklisted Reason",
    "p_Address": "Permanent Address",
    "p_City": "Permanent  City",
    "p_Pincode": "Permanent  Pincode",
    "c_Address": "Current Address",
    "c_City": "Current City",
    "c_Pincode": "Current Pincode"
  }
  //#endregion

  //declaring breadscrum
  breadscrums = [
    {
      title: "Driver Master",
      items: ["Home"],
      active: "Driver Master"
    }
  ]
  // declararing properties
  tableload = false;
  csv: any[];
  addAndEditPath: string
  uploadComponent: any;
  csvFileName: string;

  constructor(
    private driverMasterService: DriverMasterService,
    public ObjSnackBarUtility: SnackBarUtilityService,
  ) {
 
  }

  ngOnInit() {
    this.GetDriverDetails(); //calling funtion to get driver details
    this.addAndEditPath = "/Masters/DriverMaster/AddDriver" //setting Path to add data
    //this.uploadComponent = UploadDriversComponent  //setting upload component
    this.csvFileName = "Driver Details"  //setting csv file Name so file will be saved as per this name
  }
  //#region To Get Driver Details 
  GetDriverDetails() {
    this.tableload = true;
    this.error = "";
    const CompanyCode = parseInt(localStorage.getItem("CompanyCode"));
  this.driverMasterService
  //  .getMasterCommon("DMS/Master/Driver/GetDriverDetails/", 10065)
   .getMasterCommon(10065)
      .subscribe({
        next: (res) => {
          if (res) {
            this.csv = res.objResponse.map((item,index)=>{
              item.srNo = index+1;
              return item;
            }); 
            // console.log(this.csv);
                  
            this.tableload = false;
          } else {
            this.error = "Error While Getting Driver List";
            this.tableload = false
          }
        },
        error: (error) => {
          this.error = error;
          this.ObjSnackBarUtility.showNotification(
            "snackbar-danger",
            error,
            "top",
            "right"
          );
        },
        complete() {
        },
      });

  }
  //#endregion

  //#region  For Active Status
  IsActiveFuntion(row: any) {
 let driverStatus={
   CompanyCode :parseInt(localStorage.getItem("CompanyCode")),
  Driver_Id :row.driver_Id,
   UpdatedBy: localStorage.getItem("UserName"),
    ActiveFlag : row.activeFlag,
}
    this.driverMasterService
     .postMasterCommon("DMS/Master/Driver/IsActiveDetails",
      driverStatus
    )
      .subscribe({
        next: (res) => {
          if (res.isSuccess) {
           this.ObjSnackBarUtility.showNotification(
              'snackbar-success',
              'Status Update Record Successfully...!!!',
              'bottom',
              'center'
            );
          } 
        },
        error: (error) => {
          this.error = error;
          this.ObjSnackBarUtility.showNotification(
            "snackbar-danger",
            error,
            "top",
            "right"
          );
        },
        complete() {
        },
      });
  }
  //#endregion
}