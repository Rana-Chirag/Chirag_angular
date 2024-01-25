export class exampleFormControls{
    EmpCode:string;
    EmpName:string;
    Password:string;
    MobileNo:string;
    EmailId:string;
    JoiningDate:string;
    DateOfBirth:string;
    Designation:string;
    Department:string;
    State:string;
    City:string;
    Location:string
    ActiveFlag:string;
    UserRole:string;
    constructor(formControl) {
        this.EmpCode = formControl.UserId || ''
        this.EmpName=formControl.EmpName||''
        this.Password = formControl.Password || ''
        this.MobileNo = formControl.mobileno || ''
        this.EmailId = formControl.EmailId || ''
        this.JoiningDate = formControl.JoiningDate || ''
        this.DateOfBirth = formControl.DateOfBirth || ''
        this.Designation = formControl.Designation || ''
        this.Department = formControl.Department || ''
        this.State = formControl.State || ''
        this.City = formControl.State || ''
        this.Location = formControl.Location || ''
        this.ActiveFlag = formControl.ActiveFlag || ''
    }
}