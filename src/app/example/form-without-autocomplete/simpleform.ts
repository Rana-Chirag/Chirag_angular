import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormControls } from 'src/app/Models/FormControl/formcontrol';
import { formGroupBuilder } from 'src/app/Utility/Form Utilities/formGroupBuilder';
import { utilityService } from 'src/app/Utility/utility.service';
import { exampleSimpleControl } from 'src/assets/FormControlsParameters/exampleSimpleParam';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-without-autocomplete',
  templateUrl: './simpleform.html',
})
export class FormWithoutAutocompleteComponent implements OnInit {
  exampleModel: exampleSimpleControl;         // a example of model , whose form we have to display
  jsonControlArray: FormControls[];         // array to hold form controls
  AddForm: UntypedFormGroup;
  sampleDropdownData: any[];
  sampleDropdownData2: { name: string; value: string; }[];

  breadscrums = [
    {
      title: "Simple Form",
      items: ["example"],
      active: "simple Form",
    },
  ];
  protected _onDestroy = new Subject<void>();
  constructor(private fb: UntypedFormBuilder,private service :utilityService) { }

  // 'showSaveAndCancelButton'. it should be kept false when  dealing with more than one forms (like in accordion)
  // refer example of accordion for example...at     example/accordion
  // for single forms , this value will be always true 
  showSaveAndCancelButton: boolean

  savedData = {
      'name': "ajit singh",
      "UserPwd": "Ajit1!!!!1",
      "confirmpassword": "Ajit1!!!!1",
      "mobileno": "1111123123",
      "EmailId": "a@v.b",
      'D_DOB': new Date(),
    }

  ngOnInit(): void {
    this.InitializeFormControl()
    this.showSaveAndCancelButton = true;
  }


  //#region  to initialize form Control
  InitializeFormControl() {
    /**
     * this function sets validation for different fields, dynamically.
     */

    this.exampleModel = new exampleSimpleControl();
    // this.jsonControlArray = this.exampleModel.getFormControls();
    // prepopulate the fields like this...
    this.jsonControlArray = this.exampleModel.getFormControls(this.savedData);

    this.AddForm = formGroupBuilder(this.fb, [this.jsonControlArray])


  }
  //#endregion

  //#region this function listen to the values emitted by 'add-form-webxpress'
  functionCallHandler($event) {
    // console.log("fn handler called" , $event);

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
  // such fucntions have to be defined in the form specific component.
  confirmPasswordIsEqual(context) {
    let confirmPasswordFieldname = 'confirmpassword';    // define the name of field that is used as confirmpassword
    let passwordFieldname = 'UserPwd'                    // define the name of field used as password.
    let confirmPass = this.AddForm.get(confirmPasswordFieldname).value;
    let Pass = this.AddForm.get(passwordFieldname).value;
    if (Pass !== confirmPass) {
      Swal.fire({
        title: 'Password do Not Match! Please try with another',
        toast: true,
        icon: "error",
        showCloseButton: false,
        showCancelButton: false,
        showConfirmButton: true,
        confirmButtonText: "OK"
      });
      this.AddForm.controls['confirmpassword'].reset();
    }


  }

  cancel() {
    window.history.back();
  }
  save() {
    console.log(this.AddForm)
    this.service.exportData(this.AddForm.value);
    // this.service.exportData()
  }

}
