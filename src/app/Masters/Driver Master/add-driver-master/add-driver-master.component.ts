import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DriverMaster } from 'src/app/Models/Driver Master/DriverMaster';
import { FormControls } from 'src/app/Models/FormControl/formcontrol';
import { genericDisplayFunction } from 'src/app/Utility/Form Utilities/genericDisplayfn';
import { autocompleteObjectValidator } from 'src/app/Utility/Validation/AutoComplateValidation';
import { utilityService } from 'src/app/Utility/utility.service';
import { DriverControl } from 'src/assets/FormControlsParameters/DriverControls';

@Component({
  selector: 'app-add-driver-master',
  templateUrl: './add-driver-master.component.html'
})
export class AddDriverMasterComponent implements OnInit {
  AddDriverForm: UntypedFormGroup;
  IsUpdate = false;
  DriverTable: DriverMaster;
  DriverTableControl: DriverControl;
  breadscrums = [
    {
      title: "Add Driver Master",
      items: ["Home"],
      active: "Driver Master"
    }
  ]
  DriverControls: DriverControl;
  jsonControlDriverArray: FormControls[];
  jsonControlLicenseArray: FormControls[];
  jsonControlPermanentArray: FormControls[];
  jsonControlCurrentArray: FormControls[];
  accordionData: any;
  constructor(private fb: UntypedFormBuilder, private service: utilityService) { }

  ngOnInit(): void {
    this.InitializeFormControl();
  }

  //#region  to initialize form Control
  InitializeFormControl() {
    /**
     * this function sets validation for different fields, dynamically.
     */
    this.DriverControls = new DriverControl(false);
    this.jsonControlDriverArray = this.DriverControls.getFormControlsD();
    this.jsonControlLicenseArray = this.DriverControls.getFormControlsL();
    this.jsonControlPermanentArray = this.DriverControls.getFormControlsP();
    this.jsonControlCurrentArray = this.DriverControls.getFormControlsC();
    this.accordionData = {
      "Driver Details": this.jsonControlDriverArray,
      "License Details": this.jsonControlLicenseArray,
      "Permanent Address": this.jsonControlPermanentArray,
      "Current Address": this.jsonControlCurrentArray
    };
    const formGroup = {};
    this.DriverTableControl = new DriverControl(this.IsUpdate);
    [this.jsonControlDriverArray, this.jsonControlLicenseArray, this.jsonControlPermanentArray, this.jsonControlCurrentArray].forEach(
      modelControls => {
        console.log(modelControls);
        modelControls.forEach(field => {
          // console.log(field);
          const validators = [];
          // initializing validators array.
          for (let error of field.Validations) {

            let errorName = error.name;
            if (errorName == 'required') {
              validators.push(Validators.required)
            } else if (errorName == 'pattern') {
              validators.push(Validators.pattern(error.pattern))
            } else if (errorName == 'email') {
              validators.push(Validators.email)
            }
            else if (errorName == 'autocomplete') {
              validators.push(autocompleteObjectValidator())
            }
          }
          if (field.type == 'dropdown') {
            field.displaywith = genericDisplayFunction;
            // it can be overridden , later , if needed.
          }

          // here anything custom , related to field should be added .
          formGroup[field.name] = [field.value, validators];
        });
      });


    this.AddDriverForm = this.fb.group(formGroup);
  }
  //#endregion
  //#region this function listen to the values emitted by 'add-form-webxpress'
  functionCallHandler($event) {
    let field = $event.field;                   // the actual formControl instance
    let functionName = $event.functionName;     // name of the function , we have to call

    // we can add more arguments here, if needed. like as shown
    // $event['fieldName'] = field.name;

    // function of this name may not exists, hence try..catch 
    try {
      this[functionName]($event);
    } catch (error) {
      // we have to handle , if function not exists.
      console.log("failed");
    }
  }
  //#endregion
  //cancel
  cancel() {
    window.history.back();
  }
  save() {
    console.log(this.AddDriverForm.value)
    this.service.exportData(this.AddDriverForm.value)
  }
}