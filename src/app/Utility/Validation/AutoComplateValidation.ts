import { ValidatorFn, AbstractControl } from "@angular/forms";

export function autocompleteStringValidator(validOptions: Array<string>): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (validOptions.indexOf(control.value) !== -1) {
        return null; /* valid option selected */
      }
      return { invalidAutocompleteString: { value: control.value } };
    };
  }
  
 export function autocompleteObjectValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (typeof control.value === 'string') {
        return { invalidAutocompleteObject: { value: control.value } };
      }
      return null; /* valid option selected */
    };
  }

  export function autocompleteemptystringObjectValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value === '') {
        return null; /* valid empty string */
      } else if (typeof control.value === 'string') {
        return { invalidAutocompleteObject: { value: control.value } };
      }
      return null; /* valid option selected */
    };
  }
  // export function autocompleteValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     if ( control.value.length >0) {
  //       return { invalidAutocompleteObject: { value: control.value} };
  //     }
  //     return null; /* valid option selected */
  //   };
  // }


  //#region to validate dropdown text 
 export function autocompleteValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (typeof control.value === 'string'&& control.value.length > 0) {
          return { invalidAutocomplete: { value: control.value } };
        }
        return null; /* valid option selected */
    };
  } 
  //#endregion

