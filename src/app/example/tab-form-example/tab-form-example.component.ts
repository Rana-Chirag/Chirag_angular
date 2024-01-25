import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormControls } from 'src/app/Models/FormControl/formcontrol';
import { FilterUtils } from 'src/app/Utility/Form Utilities/dropdownFilter';
import { formGroupBuilder } from 'src/app/Utility/Form Utilities/formGroupBuilder';
import { genericDisplayFunction } from 'src/app/Utility/Form Utilities/genericDisplayfn';
import { autocompleteObjectValidator } from 'src/app/Utility/Validation/AutoComplateValidation';
import { utilityService } from 'src/app/Utility/utility.service';
import { exampleAccordionModel } from 'src/assets/FormControlsParameters/exampleAccodionParam';

@Component({
  selector: 'app-tab-form-example',
  templateUrl: './tab-form-example.component.html',
})
export class TabFormExampleComponent implements OnInit {
  exampleTab: exampleAccordionModel;         // a example of model , whose form we have to display
  jsonControlArray1: FormControls[];         // array to hold form controls
  jsonControlArray2: FormControls[];         // array to hold form controls
  jsonControlArray3: FormControls[];         // array to hold form controls
  tabData: any;
  sampleDropdownData: any[];
  protected _onDestroy = new Subject<void>();
  tabForm: UntypedFormGroup;
  location: any;
  locationStatus: any;
  Route: any;
  RouteStatus: any;
  sampleDropdownData2 = [
    { name: "HQTR", value: "HQTR" },
    { name: "MUMB", value: "MUMB" },
    { name: "AMDB", value: "AMDB" }
  ]
 routedropdown= [
    {
      value: "S0010 ",
      name: "AMDB-BRDB-MUMB",
    },
    {
      value: "S0003 ",
      name: "AMDB-JAIB-DELB",
    },
    {
      value: "S0002 ",
      name: "MUMB-BRDB-AMDB",
    }

   ]

  constructor(private fb: UntypedFormBuilder,private filter: FilterUtils,private service: utilityService) { }

  ngOnInit(): void {
    this.exampleTab = new exampleAccordionModel();
    this.jsonControlArray1 = this.exampleTab.getFieldControls1();
    this.jsonControlArray2 = this.exampleTab.getFieldControls2();
    this.jsonControlArray3 = this.exampleTab.getFieldControls3();
    this.tabData = {
      "Driver Details": this.jsonControlArray1,
      "License Details": this.jsonControlArray2,
      "Permanent Address": this.jsonControlArray3,
    };
    this.tabForm = formGroupBuilder(this.fb, Object.values(this.tabData));
   this.bindDropdown()
    // console.log(this.tabForm);
  }
  bindDropdown() {
    this.jsonControlArray1.forEach(data => {
   
      if (data.name === 'LocationcontrolHandler') {
        this.location = data.name;
        this.locationStatus = data.additionalData.showNameAndValue;
      }
      if (data.name === 'RoutecontrolHandler') {
        this.Route = data.name;
        this.RouteStatus = data.additionalData.showNameAndValue;
      }

      // let dataAdd=data.additionalData?.support==='controlHandler1'||''
      // if(dataAdd && data.type=='select')
     
    });
    this.filter.Filter(
      this.jsonControlArray1,
      this.tabForm,
      this.sampleDropdownData2,
      this.location,
      this.locationStatus,
    );
    this.filter.Filter(
      this.jsonControlArray1,
      this.tabForm,
      this.routedropdown,
      this.Route,
      this.RouteStatus,
    );

  }

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
  save(){
    this.service.exportData(this.tabForm.value)
  }
}
