import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { formGroupBuilder } from 'src/app/Utility/Form Utilities/formGroupBuilder';
import { fileUploadModel } from 'src/assets/FormControlsParameters/fileUploadControls';

@Component({
  selector: 'app-example-bulk-upload',
  templateUrl: './example-bulk-upload.component.html'
})
export class ExampleBulkUploadComponent implements OnInit {
  downloadTemplate='User Master'
  hrefTemplate='assets/Download/UserUploadTemplate.xlsx'
  moduleFileName='User Master'
  jsonControlArray:any;
  routePath='';
  isDate=false;
  apiPath='UserUpload';
  title='User Master';
  moduleName='User Master Bulk Upload';
  fileUploadForm: UntypedFormGroup;
  fileUpload: fileUploadModel;
  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  this.InitializeFormControl();
  }
  //#region  to initialize form Control
  InitializeFormControl() {
    /**
     * this function sets validation for different fields, dynamically.
     */

    this.fileUpload = new fileUploadModel();
    this.jsonControlArray = this.fileUpload.getFieldControls();

    this.fileUploadForm = formGroupBuilder(this.fb, [this.jsonControlArray])


  }
  //#endregion
}
