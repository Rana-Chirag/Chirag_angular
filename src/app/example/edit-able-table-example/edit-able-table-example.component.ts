import { SelectionModel } from "@angular/cdk/collections";
import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import {
  FormControl,
  UntypedFormBuilder,
  UntypedFormGroup,
} from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { Observable, async, forkJoin, map, startWith, tap } from "rxjs";

import { SnackBarUtilityService } from "src/app/core/service/Utility/SnackBarUtility.service";
import { AuthService } from "src/app/core/service/auth.service";
import { FunctionCallService } from "src/app/core/service/function-call.service";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";
type AOA = any[][];

@Component({
  selector: 'app-edit-able-table-example',
  templateUrl: './edit-able-table-example.component.html',
})
export class EditAbleTableExampleComponent extends UnsubscribeOnDestroyAdapter {
  @Input() data: any;

  breadscrums = [
    {
      title: "Dynamic Table",
      items: ["example"],
      active: "Dynamic Table",
    },
  ];
  tabledata: any = [];

  ActionObject = {
    AddRow: true,
    Submit: true,
    Search: true
  }
  displayedColumns1 = {
    Check: {
      name: "Check",
      Key: "checkbox",
      Style: "",
    },
    srno: {
      name: "Sr No",
      Key: "index",
      Style: "",
    },
    vehicleNo: {
      name: "vehicle No",
      Key: "static",
      Style: "",
    },
    tripType: {
      name: "Trip Type",
      Key: "Dropdown",
      Option: [],
      Style: "",
    },
    city: {
      name: "City Based",
      Key: "Dropdown",
      Option: [],
      Style: "",
    },
    ftlType: {
      name: "Type Of Movement",
      Key: "multipleDropdown",
      Option: [],
      Style: "",
    },

    isActiv: {
      name: "IsActive",
      Key: "toggle",
      Style: "",
    },
    minimumCharge: {
      name: "Min Charge",
      Key: "input",
      Style: "",
    },
    description: {
      name: "Description",
      Key: "inputString",
      Style: "",
    },
    Action: {
      name: "Action",
      Key: "Action",
      Style: "",
    },
  };
  vendorCode: any;
  contractCode: any;


  constructor(
    public ObjSnackBarUtility: SnackBarUtilityService,
    public IFunctionCallService: FunctionCallService,
  ) {
    super();
  }

  ngOnInit() {
    this.LoadTempData()
    this.GetAllMastersData()
  }

  LoadTempData() {
    this.tabledata = [{
      ftlType: [],
      id: 0,
      minimumCharge: "",
      tripType: "",
      city: "",
      vehicleNo: "GJ21BE3269",
      Check: false,
      isActiv: true,

    },
    {
      ftlType: [],
      id: 0,
      minimumCharge: "",
      tripType: "",
      city: "",
      vehicleNo: "GJ21BE3270",
      Check: false,
      isActiv: true,

    }]
  }
  addItem() {
    const AddObj = {
      ftlType: [],
      id: 0,
      minimumCharge: "",
      tripType: "",
      city: "",
      vehicleNo: "GJ21BE356",
      Check: false,
      isActiv: true,

    };
    this.tabledata.splice(0, 0, AddObj)
  }

  // get All DropDown Data
  GetAllMastersData() {
    this.displayedColumns1.tripType.Option = [
      {
        "name": "AdHoc",
        "value": "ST"
      },
      {
        "name": "Scheduled",
        "value": "BIM"
      }
    ]
    this.displayedColumns1.city.Option = [
      {
        "name": "surat",
        "value": "ST"
      },
      {
        "name": "Mumbai",
        "value": "MUMB"
      },
      {
        "name": "Bilimora",
        "value": "BIM"
      }
    ]
    this.displayedColumns1.ftlType.Option = [
      {
        "name": "ABDE",
        "value": 1
      },
      {
        "name": "ADCB",
        "value": 2
      },
      {
        "name": "AGRA",
        "value": 3
      },
      {
        "name": "AHM",
        "value": 4
      },
      {
        "name": "AHMEDABAD",
        "value": 5
      },
      {
        "name": "AIZAWL",
        "value": 7
      },
    ]
  }

  async Update(event) {
    debugger
    const elimentvalue = event.elimentvalue;
    const currenteliment = event.currenteliment;
    const nexteliment = event.nexteliment;
    const index = event.index;
    let result = this.displayedColumns1.city.Option.filter(x => x.value == elimentvalue);
    event.callback(result);
    return true
  }


  async Delete(event) {
    const index = event.index;
    const row = event.element;

    const swalWithBootstrapButtons = await Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success msr-2",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: `<h4><strong>Are you sure you want to delete ?</strong></h4>`,
        // color: "#03a9f3",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        showLoaderOnConfirm: true,
        preConfirm: (Remarks) => {
          var Request = {
            CompanyCode: localStorage.getItem("CompanyCode"),
            ID: row.id,
          };
          if (row.id == 0) {
            return {
              isSuccess: true,
              message: "City has been deleted !",
            };
          } else {
            console.log("Request", Request);
            //return this.VendorContractService.updateMileStoneRequest(Request);
          }
        },
        allowOutsideClick: () => !Swal.isLoading(),
      })
      .then((result) => {

        if (result.isConfirmed) {
          this.tabledata.splice(index, 1);
          this.tabledata = this.tabledata;
          swalWithBootstrapButtons.fire("Deleted!", "Your Message", "success");
          event.callback(true);
        } else if (result.isConfirmed) {
          swalWithBootstrapButtons.fire("Not Deleted!", "Your Message", "info");
          event.callback(false);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your item is safe :)",
            "error"
          );
          event.callback(false);
        }
      });

    return true
  }
  functionCallHandler($event) {
    // console.log("fn handler called" , $event);

    let field = $event.field;                   // the actual formControl instance
    let functionName = $event.functionName;     // name of the function , we have to call

    // function of this name may not exists, hence try..catch 
    try {
      this[functionName]($event);
    } catch (error) {
      // we have to handle , if function not exists.
      console.log("failed");
    }
  }
  SaveData() {
    console.log("this.tabledata", this.tabledata);

    var SelectedArry = [];
    for (let index = 0; index < this.tabledata.length; index++) {
      const element = this.tabledata[index];
      if (element.Check) {
        SelectedArry.push(element);
      }
    }
    console.log("SelectedArry", SelectedArry);
  }

  SwalMessage(message) {
    Swal.fire({
      title: message,
      toast: true,
      icon: "error",
      showCloseButton: true,
      showCancelButton: false,
      showConfirmButton: false,
      confirmButtonText: "Yes",
    });
  }
}
