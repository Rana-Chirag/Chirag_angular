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

import { DriverMasterService } from 'src/app/core/service/Masters/Driver Master/driver-master.service';

import { StateService } from '../../core/service/state.service';

@Component({
  selector: 'app-add-form-emp',
  templateUrl: './add-form-emp.component.html',
  
})
export class AddFormEmpComponent implements OnInit {
  exampleModel: exampleControl;         // a example of model , whose form we have to display
  jsonControlArray: FormControls[];         // array to hold form controls
  AddTableForm: UntypedFormGroup;
  sampleDropdownData: any[];
  breadscrums = [
    {
      title: "Registration Form",
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
  
  //Desi
  Designation: any;
  Designationnew: string;
  DesignationStatus: any;
  DesignationStatusnew: any;
  
  //dept
  Department: any;
  Departmentnew: string;
  DepartmentStatus: any;
  DepartmentStatusnew: any;

   //state
   State: string;
   Statenew: string;
   StateStatus: any;
   StateStatusnew: any;

   //city
   city: any;
   citynew: string;
   cityStatus: any;
   cityStatusnew: any;
   

  stateDropdownData: any[] = [];
  selectedState: string = '';

  fromTable: exampleFormControls;
  IsUpdate: boolean;
  designationList: { name: string; value: string; }[];
  deptList: { name: string; value: any; }[];
  stateList: { name: string; value: string; }[];
  cityList: { name: string; value: string; }[];

  locationList: { name: string; value: string; }[];
  password: any;
  confirmpassword: any;
  // savedChoices: any[]
  // choicesController: string

  // files code 
  SelectFile: File;
  imageName: string;
  selectedFiles: boolean;
  constructor(private fb: UntypedFormBuilder, public xlsxutils: xlsxutilityService, 
    private router: Router, private service: utilityService, private filter: FilterUtils, 
    private dataService: DriverMasterService) {
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

  // constructor(private stateService: StateService) {}



  insertDataToDatabase() {
    if (this.AddTableForm.valid) {
      const formData = this.AddTableForm.value;
      this.dataService.insertData(formData).subscribe(
        (response) => {
          console.log('Data inserted successfully:', response);
          // Optionally, you can handle success here
        },
        (error) => {
          console.error('Error inserting data:', error);
          // Optionally, you can handle errors here
        }
      );
    } 
    else 
    {
      console.error('Form is invalid. Cannot submit.');
    }
  }

  ngOnInit(): void {
    this.InitializeFormControl();
    // this.loadStates();
    this.dropDownInitialize()
  }

  
  // loadStates(): void {
  //   this.stateService.getStates().subscribe(
  //     (data) => {
  //       // Assuming data is an array of state objects with a 'name' property
  //       this.stateDropdownData = data.map((state: any) => ({ name: state.name, value: state.name }));
  //     },
  //     (error) => {
  //       console.error('Error fetching state data:', error);
  //     }
  //   );
  // }

// loadstate(){

// }

  dropDownInitialize() {





    this.sampleDropdownData2 = [
      { name: "HQTR", value: "HQTR" },
      { name: "MUMB", value: "MUMB" },
      { name: "AMDB", value: "AMDB" }
    ]
    this.sampleDropdownData = [
      { name: "Gujarat", value: "Gujarat" },
      { name: "User", value: "User" },
      { name: "Super", value: "AMDB" }
    ]

    // this.setMultiSelectDropdown("Location");
    // this.designationList = [
    //   { name: "Trainee", value: "1" },
    //   { name: "Software Developer", value: "2" },
    //   { name: "Senior Software Developer ", value: "3" },
    //   { name: "Technology AnalysAnalyst", value: "4" },
    //   { name: "Technical lead", value: "5" },
    //   { name: "Manager", value: "6" },
    //   { name: "Architect", value: "7" },
    //   { name: "Senior Architect", value: "8" },

    // ];
    
    // this.designationList1 = [
    //   { name: "Trainee", value: "1" },
    //   { name: "Software Developer", value: "2" },
    //   { name: "Senior Software Developer ", value: "3" },
    //   { name: "Technology AnalysAnalyst", value: "4" },
    //   { name: "Technical lead", value: "5" },
    //   { name: "Manager", value: "6" },
    //   { name: "Architect", value: "7" },
    //   { name: "Senior Architect", value: "8" },
    // ];

    // this.stateList = [
    //   { name: "Trainee", value: "1" },
    //   { name: "Software Developer", value: "2" },
    //   { name: "Senior Software Developer ", value: "3" },
    //   { name: "Technology AnalysAnalyst", value: "4" },
    //   { name: "Technical lead", value: "5" },
    //   { name: "Manager", value: "6" },
    //   { name: "Architect", value: "7" },
    //   { name: "Senior Architect", value: "8" },
    // ];

    
    // this.cityList = [
    //   { name: "Trainee", value: "1" },
    //   { name: "Software Developer", value: "2" },
    //   { name: "Senior Software Developer ", value: "3" },
    //   { name: "Technology AnalysAnalyst", value: "4" },
    //   { name: "Technical lead", value: "5" },
    //   { name: "Manager", value: "6" },
    //   { name: "Architect", value: "7" },
    //   { name: "Senior Architect", value: "8" },
    // ];
    //this.locationList=this.getDataForDropDown('Location');


    this.dataService.getDept().subscribe((dept) => {
      const depts = dept.map((dept) => {
        return {
          name: dept.dept_name,
          value: dept.dept_id,
        };
      });
      this.deptList = depts;
      this.filter.Filter(
        this.jsonControlArray,
        this.AddTableForm,
        this.deptList,
        this.Department,
        this.DepartmentStatus
      );
    })





    this.dataService.getState().subscribe((state) => {
      const states = state.map((state) => {
        return {
          name: state.STNM,
          value: state.ST,
        };
      });
      this.stateList = states;
      this.filter.Filter(
        this.jsonControlArray,
        this.AddTableForm,
        this.stateList,
        this.State,
        this.StateStatus
      );
    })


    
    // this.filter.Filter(
    //   this.jsonControlArray,
    //   this.AddTableForm,
    //   // this.designationList1,
    //   this.Department,
    //   this.DepartmentStatus,
    // );


    // chatgpt ove

    
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

  // loadDes(){
  //   const selectedd = this.AddTableForm.value.DesignationcontrolHandler1;
  //   const de=selectedd.value;
  //   this.dataService.getDesi(de).subscribe((desi) => {
  //     const designation = desi.map((desi) => {
  //       return {
  //         name: desi.designation,
  //         value: desi.dept_id,
  //       };
  //     });
  //     this.designationList = designation;
  //   this.filter.Filter(
  //     this.jsonControlArray,
  //     this.AddTableForm,
  //     this.designationList,
  //     this.Designation,
  //     this.DesignationStatus,
  //   );
  //   })
  // }

  loadDes() {
    const selectedd = this.AddTableForm.value.DesignationcontrolHandler1;
    
    if (selectedd && selectedd.value !== undefined) {
      const de = selectedd.value;
  
      this.dataService.getDesi(de).subscribe((desi) => {
        const designation = desi.map((desi) => {
          return {
            name: desi.designation,
            value: desi.dept_id,
          };
        });
        this.designationList = designation;
  
        this.filter.Filter(
          this.jsonControlArray,
          this.AddTableForm,
          this.designationList,
          this.Designation,
          this.DesignationStatus,
        );
      });
    }
  }
  


  loadCity(){
    const selectedstate = this.AddTableForm.value.DesignationcontrolHandlerState;
    const state=selectedstate.value;
    // alert(state);
    this.dataService.getCity(state).subscribe((city) => {
      const city_data = city.map((city) => {
        return {
          name: city.CT,
          value: city.ST,
        };
      });
      this.cityList = city_data;
    this.filter.Filter(
      this.jsonControlArray,
      this.AddTableForm,
      this.cityList,
      this.city,
      this.cityStatus,
    );
    })
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
        // let deptValue = this.designationList1.find((x) => x.value == this.fromTable.Department)
       // let stateValue = this.stateList.find((x) => x.value == this.fromTable.State)
        let cityValue = this.cityList.find((x) => x.value == this.fromTable.City)
        // this.AddTableForm.controls['Designation'].patchValue(desValue);
        this.AddTableForm.controls['controlHandler1'].patchValue(desValue);
        // this.AddTableForm.controls['controlHandler1Dept'].patchValue(deptValue);
       // this.AddTableForm.controls['controlHandler1State'].patchValue(stateValue);
        this.AddTableForm.controls['controlHandler1State'].patchValue(cityValue);
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
      if (data.name === 'LocationcontrolHandler') {
        // Set location-related variables
        this.role = data.name;
        this.RoleStatus = data.additionalData.showNameAndValue;
      }
      if (data.name === 'LocationcontrolHandler1') {
        this.location = data.name;
        this.locationStatus = data.additionalData.showNameAndValue;
      }
      // let dataAdd=data.additionalData?.support==='controlHandler1'||''
      // if(dataAdd && data.type=='select')
      if (data.name === 'DesignationcontrolHandler') {
        this.Designation = data.name;
        this.DesignationStatus = data.additionalData.showNameAndValue;
      }
      if (data.name === 'DesignationcontrolHandler1') {
        this.Department = data.name;
        this.DepartmentStatus = data.additionalData.showNameAndValue;
      } 
      if (data.name === 'DesignationcontrolHandlerState') {
        this.State = data.name;
        this.StateStatus = data.additionalData.showNameAndValue;
      }
      if (data.name === 'DesignationcontrolHandlercity') {
        this.city = data.name;
        this.cityStatus = data.additionalData.showNameAndValue;
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
    // this.service.exportData(this.AddTableForm.value)
    // this.loadDes()
    // this.loadCity()
    
   let data={
    "emp_code":this.AddTableForm.value.EmpCode,
    "emp_name":this.AddTableForm.value.EmpName,
    "emp_dept":this.AddTableForm.value.DesignationcontrolHandler1.value,
    "emp_desi":this.AddTableForm.value.DesignationcontrolHandler.value,
    // "emp_dob":this.AddTableForm.value.DateOfBirth.todate(),
    // "emp_doj":this.AddTableForm.value.JoiningDate.todate(),
    "state":this.AddTableForm.value.DesignationcontrolHandlerState.value,
    "city":this.AddTableForm.value.DesignationcontrolHandlercity.value
   }
   alert(data.city)
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

  
}
