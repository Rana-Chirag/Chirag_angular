import { Component, OnInit } from '@angular/core';
import { FormControls } from 'src/app/Models/FormControl/formcontrol';
import { exampleControl } from 'src/assets/FormControlsParameters/ExampleControlParam';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ReplaySubject, Subject, map, startWith, take, takeUntil } from 'rxjs';
import { AutoComplateCommon } from 'src/app/core/models/AutoComplateCommon';
import { formGroupBuilder } from 'src/app/Utility/Form Utilities/formGroupBuilder';
import { utilityService } from 'src/app/Utility/utility.service';
import { FilterUtils } from 'src/app/Utility/Form Utilities/dropdownFilter';
import { Router } from '@angular/router';
import { exampleFormControls } from 'src/app/Models/Example Model/exampleModel';
import Swal from 'sweetalert2';
import { xlsxutilityService } from 'src/app/Utility/xlsx Utils/xlsxutility.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html'
})
export class AddFormComponent implements OnInit {
  exampleModel: exampleControl;         // a example of model , whose form we have to display
  jsonControlArray: FormControls[];         // array to hold form controls
  AddTableForm: UntypedFormGroup;
  sampleDropdownData: any[];
  breadscrums = [
    {
      title: "AddForm",
      items: ["example"],
      active: "AddForm",
    },
  ];
  sampleDropdownData2: { name: string; value: string; }[];
  protected _onDestroy = new Subject<void>();

  // properties for one multiselect 
  multipleChoices: AutoComplateCommon[]
  role: string;
  RoleStatus: any;
  location: string;
  locationStatus: any;
  Designation: string;
  Designationnew: string;
  DesignationStatus: any;
  DesignationStatusnew: any;

  fromTable: exampleFormControls;
  IsUpdate: boolean;
  designationList: { name: string; value: string; }[];
  locationList: { name: string; value: string; }[];
  password: any;
  confirmpassword: any;
  // savedChoices: any[]
  // choicesController: string

  // files code 
  SelectFile: File;
  imageName: string;
  selectedFiles: boolean;
  constructor(private fb: UntypedFormBuilder, public xlsxutils: xlsxutilityService, private router: Router, private service: utilityService, private filter: FilterUtils) {
    if (this.router.getCurrentNavigation()?.extras?.state != null) {
      this.fromTable = router.getCurrentNavigation().extras.state.data;
      this.IsUpdate = true;
      this.breadscrums = [
        {
          title: "Edit Form",
          items: ["Home"],
          active: "Edit Form",
        },
      ];
    }
    else {
      this.fromTable = new exampleFormControls({})
    }
  }


  ngOnInit(): void {
    this.InitializeFormControl();
    this.dropDownInitialize()
  }

  dropDownInitialize() {
    this.sampleDropdownData2 = [
      { name: "HQTR", value: "HQTR" },
      { name: "MUMB", value: "MUMB" },
      { name: "AMDB", value: "AMDB" }
    ]
    this.sampleDropdownData = [
      { name: "Admin", value: "Admin" },
      { name: "User", value: "User" },
      { name: "Super", value: "AMDB" }
    ]

    this.setMultiSelectDropdown("Location");
    this.designationList = [
      { name: "Trainee", value: "1" },
      { name: "Software Developer", value: "2" },
      { name: "Senior Software Developer ", value: "3" },
      { name: "Technology AnalysAnalyst", value: "4" },
      { name: "Technical lead", value: "5" },
      { name: "Manager", value: "6" },
      { name: "Architect", value: "7" },
      { name: "Senior Architect", value: "8" },
    ];
    //this.locationList=this.getDataForDropDown('Location');


    this.filter.Filter(
      this.jsonControlArray,
      this.AddTableForm,
      this.designationList,
      this.Designation,
      this.DesignationStatus,
    );

    this.filter.Filter(
      this.jsonControlArray,
      this.AddTableForm,
      this.sampleDropdownData,
      this.role,
      this.RoleStatus
    );
    this.filter.Filter(
      this.jsonControlArray,
      this.AddTableForm,
      this.sampleDropdownData2,
      this.location,
      this.locationStatus
    );
  }
  setMultiSelectDropdown(controlName: string) {

    this.multipleChoices = this.sampleDropdownData2;
    let multiSelectFormName = controlName;
    let index1 = this.jsonControlArray.findIndex(obj => obj.name == multiSelectFormName);
    // let index2 = this.jsonControlArray.findIndex(obj => obj.name == 'controlHandler');

    //every multiselect dropdown needs to be initialized like this.
    this.jsonControlArray[index1].filterOptions = new ReplaySubject<AutoComplateCommon[]>(1);
    this.jsonControlArray[index1].filterOptions.next(this.multipleChoices.slice());

    this.AddTableForm.controls[multiSelectFormName].valueChanges
      .pipe(takeUntil(this._onDestroy));
    // .subscribe(() => {});


    // if saved data exists
    /**
      if (this.dayWiseHoliday.length > 0) {
      let m = this.dayWiseHoliday.split(",")
      let savedHolidays = this.multipleHoliDays.filter(obj => m.includes(obj.value));
      filter = [...savedHolidays];
    }
     this.AddTableForm.controls['controlHandler'].patchValue(filter)
     */


    setTimeout(() => {
      if (this.IsUpdate) {
        /* If the value auto Bind in Dropdown Below the Method should Be Used */
        let desValue = this.designationList.find((x) => x.value == this.fromTable.Designation)
        // this.AddTableForm.controls['Designation'].patchValue(desValue);
        this.AddTableForm.controls['controlHandler1'].patchValue(desValue);
        let roleValue = this.sampleDropdownData.find((x) => x.value == this.fromTable.UserRole)
        this.AddTableForm.controls['ROLEID'].setValue(roleValue);
        let locValue = this.sampleDropdownData2.filter((x) => x.value == this.fromTable.Location)
        this.AddTableForm.controls['controlHandler'].patchValue(locValue);
        /*End*/
      }
    }, 1000);
  }



  //#region  to initialize form Control
  InitializeFormControl() {

    /**
     * this function sets validation for different fields, dynamically.
     */

    this.exampleModel = new exampleControl(this.fromTable, this.IsUpdate);

    this.jsonControlArray = this.exampleModel.getFormControls();
    this.jsonControlArray.forEach(data => {
      if (data.name === 'ROLEID') {
        // Set location-related variables
        this.role = data.name;
        this.RoleStatus = data.additionalData.showNameAndValue;
      }
      if (data.name === 'LocationcontrolHandler') {
        this.location = data.name;
        this.locationStatus = data.additionalData.showNameAndValue;
      }
      // let dataAdd=data.additionalData?.support==='controlHandler1'||''
      // if(dataAdd && data.type=='select')
      if (data.name === 'DesignationcontrolHandler') {
        this.Designation = data.name;
        this.DesignationStatus = data.additionalData.showNameAndValue;
      }
    });

    this.AddTableForm = formGroupBuilder(this.fb, [this.jsonControlArray]);

  }
  //#endregion
  //#region this function listen to the values emitted by 'add-form-webxpress'
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
  //#endregion
  //#region (example usage )to check if name entered in name Form Field, is unique or not.
  checkUnique(context) {
    // example data , to check if name already exists or not
    let existing_name = [
      "ajit",
      "ajit1",
      "ajit2",
      "ajit3",
      "ajit4",
      "ajit5",
      "ajit6",
    ]
    // we are using that argument that we added later.
    let nameValue: string = this.AddTableForm.get(context.field['name']).value;

    if (existing_name.includes(nameValue.toLowerCase())) {
      console.log("Name Already Exists...")
    } else {
      console.log("Name is unique....")
    }

  }
  //#endregion

  //#region dropdown example

  getTimeZoneData() {
    [{
      "name": "Europe/Athens",
      "value": 4
    }, {
      "name": "Asia/Chongqing",
      "value": -5
    }, {
      "name": "America/Panama",
      "value": -4
    }, {
      "name": "America/Mexico_City",
      "value": 0
    }, {
      "name": "Europe/Paris",
      "value": 4
    }]
  }

  //cancel
  ChangedPassword() {

    this.password = this.AddTableForm.get("Password").value;

    this.confirmpassword = this.AddTableForm.get("confirmpassword").value;

    if (this.password != this.confirmpassword) {

      Swal.fire({

        title: "Password and confirm password did not match",

        toast: true,

        icon: "error",

        showCloseButton: false,

        showCancelButton: false,

        showConfirmButton: true,

        confirmButtonText: "OK",

      });

      this.AddTableForm.controls["confirmpassword"].reset();

    }

  }
  cancel() {
    window.history.back();
  }
  save() {
    // this.jsonControlArray.forEach(data => {
    //   if (data?.additionalData?.support) {
    //     if(!this.AddTableForm.controls[data?.additionalData?.support].value){
    //         this.AddTableForm.removeControl(data?.name);
    //     }
    //   }
    // });
    this.service.exportData(this.AddTableForm.value)

  }

  // function handles select All feature of all multiSelect fields of one form.
  toggleSelectAll(argData: any) {
    console.log(argData);
    let fieldName = argData.field.name;
    let autocompleteSupport = argData.field.additionalData.support;
    let isSelectAll = argData.eventArgs;


    const index = this.jsonControlArray.findIndex(
      (obj) => obj.name === fieldName
    );
    this.jsonControlArray[index].filterOptions
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe((val) => {
        this.AddTableForm.controls[autocompleteSupport].patchValue(
          isSelectAll ? val : []
        );
      });
  }

  public selectedFile(event) {
    let fileList: FileList = event.eventArgs;
    if (fileList.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const file = fileList[0];

    if (file) {
      this.xlsxutils.readFile(file).then((jsonData) => {
        this.xlsxutils.validateDataWithApiCall(jsonData, validationRules).subscribe(
          (response) => {
            console.log(response)
            this.xlsxutils.OpenPreview(response)
          },
          (error) => {
            console.error('Validation error:', error);
            // Handle errors here
          }
        );

      });
      this.AddTableForm.controls["Company_file"].setValue(
        file.name
      );
    }
  }
}



const validationRules = [
  {
    "ItemsName": "PaymentType",
    "Validations": [
      { "Required": true },
      { "TakeFromList": ["TOPAY", "TBB"] }
    ]
  },
  {
    "ItemsName": "PinCode",
    "Validations": [
      { "Required": true },
      { "TakeFromList": [123456, "1013456"] }
      // { "ApiValidation": true }

    ]
  },
  {
    "ItemsName": "Name",
    "Validations": [
      { "Required": true }
    ]
  },
  {
    "ItemsName": "Age",
    "Validations": [
      { "Required": true },
      { "Numeric": true },
      { "MinValue": 18 },
      { "MaxValue": 99 }
    ]
  },
  {
    "ItemsName": "Email",
    "Validations": [
      { "Required": true },
      { "Pattern": /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }
    ]
  }
];