import { Component, Input, OnInit } from '@angular/core';
import { FormControlCreation } from '../../../core/models/FormControl/formcontrol';
import { FormGroupDirective, UntypedFormGroup } from '@angular/forms';
import { FunctionCallService } from '../../../core/service/function-call.service';

@Component({
  selector: 'app-add-common-components',
  templateUrl: './add-common-components.component.html'
})
export class AddCommonComponentsComponent implements OnInit {
  @Input() formItem!: FormControlCreation
  form!: UntypedFormGroup
  minDate: Date;
  showPassword: boolean = true;
  ConfirmshowPassword: boolean;
  isIndeterminate = false;
  isChecked = false;
  maxDate: Date
  constructor(private rootFormGroup: FormGroupDirective, private functioncall: FunctionCallService) {
    this.form = this.rootFormGroup.control
    this.minDate = new Date("01 Jan 1900");
    const today = new Date();
    this.maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
   }

  ngOnInit(): void {
  }
  callEvents(functionname, event) {
    switch (functionname) {

    }
    if (functionname) {
      let functions = functionname.split(",");
      if (functions.length > 0) {
        if (functions.includes("passwordvisible")) {
          this.togglePasswordVisibility();
        }
        else if (functions.includes("confirmpassword")) {
          this.toggleconfirmPasswordVisibility();
        }
      }
    }
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleconfirmPasswordVisibility(): void {
    this.ConfirmshowPassword = !this.ConfirmshowPassword;
  }
  setInputType(name: any) {
    if (name === 'UserPwd') {
      if (this.showPassword == false) {
        return 'text'
      }
      return 'password'
    }
    else if (name == 'confirmpassword') {
      if (this.ConfirmshowPassword == false) {
        return 'text'
      }
      return 'password'
    }
  }
}
