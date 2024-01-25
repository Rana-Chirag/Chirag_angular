import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormControls } from 'src/app/Models/FormControl/formcontrol';
import { FilterUtils } from 'src/app/Utility/Form Utilities/dropdownFilter';
import { formGroupBuilder } from 'src/app/Utility/Form Utilities/formGroupBuilder';
import { exampleAccordionModel } from 'src/assets/FormControlsParameters/exampleAccodionParam';

@Component({
  selector: 'app-acccordion-example',
  templateUrl: './acccordion-example.component.html',
})
export class AcccordionExampleComponent implements OnInit {
  // as this is example of accorion , we will have multiple models
  exampleAccordioncontrol: exampleAccordionModel;         // a example of model , whose form we have to display
  jsonControlArray1: FormControls[];         // array to hold form controls
  jsonControlArray2: FormControls[];         // array to hold form controls
  jsonControlArray3: FormControls[];         // array to hold form controls
  accordionData: any;
  protected _onDestroy = new Subject<void>();
  accordionForm: UntypedFormGroup;
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

  breadscrums = [
    {
      title: "Accordion Form",
      items: ["example"],
      active: "Accordion Form",
    },
  ];

  constructor(private fb: UntypedFormBuilder,private filter: FilterUtils) { }

  ngOnInit(): void {
    this.exampleAccordioncontrol = new exampleAccordionModel();
    this.jsonControlArray1 = this.exampleAccordioncontrol.getFieldControls1();
    this.jsonControlArray2 = this.exampleAccordioncontrol.getFieldControls2();
    this.jsonControlArray3 = this.exampleAccordioncontrol.getFieldControls3();
    this.accordionData = {
      "Driver Details": this.jsonControlArray1,
      "License Details": this.jsonControlArray2,
      "Permanent Address": this.jsonControlArray3,
    };

    // this.accordionForm = formGroupBuilder(this.fb, [this.jsonControlArray1,
    //                                                 this.jsonControlArray2,
    //                                                 this.jsonControlArray3])
    // OR
    this.accordionForm = formGroupBuilder(this.fb, Object.values(this.accordionData));
    this.bindDropdown()
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
      this.accordionForm,
      this.sampleDropdownData2,
      this.location,
      this.locationStatus,
    );
    this.filter.Filter(
      this.jsonControlArray1,
      this.accordionForm,
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
}
