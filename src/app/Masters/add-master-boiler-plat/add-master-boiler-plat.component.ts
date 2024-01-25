import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterBoilerControl } from '../../core/models/FormControl/MasterBoilerControl';
import { AutoCompleteCommon } from '../../core/models/FormModel/MasterBoiler';

@Component({
  selector: 'app-add-master-boiler-plat',
  templateUrl: './add-master-boiler-plat.component.html'

})
export class AddMasterBoilerPlatComponent implements OnInit {
  FieldDetails: any[];
  divcol: string = "col-xl-3 col-lg-3 col-md-12 col-sm-12 mb-2";
  FromGrop: FormGroup;
  MasterBoilerControlDetails=MasterBoilerControl;
  breadscrums = [
    {
      title: "Add BoilerMaster",
      items: ["Add BoilerMaster"],
      active: "Add BoilerMaster",
    },
  ];
  constructor(private fb: UntypedFormBuilder,
    private cdr: ChangeDetectorRef) {
       this.FieldDetails=this.MasterBoilerControlDetails;
       this.FromGrop = this.Formgrop();
     }

  ngOnInit(): void {
   
  }
  testing(){
      
  }
    // Define a function that creates and returns a FormGroup for step 1 of the form
    Formgrop(): UntypedFormGroup {
      const formControls = {}; // Initialize an empty object to hold form controls
      // Loop through the step 1 form controls and add them to the form group
      if (this.FieldDetails.length > 0) {
        this.FieldDetails.forEach(cnote => {
          let validators = []; // Initialize an empty array to hold validators for this control
          if (cnote.Validation === 'Required') { // If the control is required, add a required validator
            validators = [Validators.required];
          }
  
          // Add the control to the form group, using its default value (or the current date if it is a 'TodayDate' control) and any validators
          formControls[cnote.name] = this.fb.control(cnote.defaultvalue == 'TodayDate' ? new Date() : cnote.defaultvalue, validators);
        });
        // Create and return the FormGroup, using the form controls we just created
        return this.fb.group(formControls)
      }
    }
  
  callActionFunction(functionName: string, event: any) {
    switch (functionName) {
      case "testing":
        this.testing();
        break;
        default:
        break;
    }
  }
    // Function to display billing group in the input field
    displayCnotegropFn(dataGrop: AutoCompleteCommon): string {
      return dataGrop && dataGrop.Value ? dataGrop.Value + ":" + dataGrop.Name : "";
    }
}
