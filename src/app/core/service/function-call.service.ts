import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FunctionCallService {

  private methodSubjects: { [key: string]: Subject<any>[] } = {};
  public data: any;
  // Register a new method subject for a component and method
  registerMethodSubject(key: string, method: string) {
    if (!this.methodSubjects[key]) {
      this.methodSubjects[key] = [];
    }

    if (!this.methodSubjects[key][method]) {
      this.methodSubjects[key][method] = new Subject<any>();
    }
  }

  // Get the method subject for a component and method
  getMethodSubject(key: string, method: string) {
    if (!this.methodSubjects[key] || !this.methodSubjects[key][method]) {
      throw new Error(`Method subject not found for component ${key} and method ${method}`);
    }

    return this.methodSubjects[key][method];
  }

  // Call a method for a component
  callMethod(key: string, method: string,parameter: any) {
    this.getMethodSubject(key, method).next(parameter);
  }
  
}
