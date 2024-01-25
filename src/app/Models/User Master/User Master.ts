export class UserMaster {
  id: number;
  userId: string;
  companyId: number;
  name: string;
  email: string;
  internalId: string;
  password: string;
  userType: string;
  Address: string;
  address: string;
  userRole: any;
  department: any;
  dateOfBirth: Date;
  dateOfJoining: Date;
  srNo:any;
  mobileNo: string;
  isActive: boolean;
  entryBy: string;
  entryDate: Date;
  updateBy: string;
  IsSuccess: string;
  Action: string;
  Message: string;
  updateDate: Date;
  IsUpdate: string;
  emailId: any;
  gender: any;
  userStatus: any;
  manageID: any;
  securatAns: any;
  securatQue: any;

  BranchCode: any;
  ROLEID: any;
  ManagerId: any;
  Username: any;
  dob: Date;
  doJ_ORG: Date;
  passwordAns: string;
  passwordQues: string;
  roleid: any;
  status: any;
  empId: any;
  emptype: string;
  userLocations: string;
  branchCode: string;
  mobileno: number;
  user_Type: any;
  managerId: string;
  deptId: string;
  resi_addr: string;
  BranchId: any;
  UserId: any;
  value: any;
  EmpId: any;
  PasswordQues: any;
  EmailId: any;
  DOB: any;
  divId:string;
  // name: any;
  userPwd: any;

  constructor(UserMaster) {
    {
      this.id = UserMaster.id || this.getRandomID();
      this.userId = UserMaster.userId || "";
      this.name = UserMaster.name || "";
      this.name = UserMaster.name || "";
      this.email = UserMaster.email || "";
      this.password = UserMaster.password || "";
      this.mobileNo = UserMaster.mobileNo || "";
      this.internalId = UserMaster.internalId || "";
      this.userRole = UserMaster.userRole || "";
      this.userType = UserMaster.userType || "";
      this.isActive = UserMaster.isActive || false;
      this.address = UserMaster.address || "";
      this.department = UserMaster.department || "";
      this.entryBy = UserMaster.entryBy || "";
      this.updateBy = UserMaster.updateBy || "";
      this.status = UserMaster.status || 200;
      this.divId=UserMaster.divId||'';
    }
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
}
export class MasteQuery {
  queryOn: any;
}
export class GetUserMasterDetails {
  IsSuccess: string;
  Message: string;
  UserMaster: UserMaster[];
}
export class locationList {
  name: string;
  value: number;
}

// export class MultilocationList {
//   name: string;
//   value: number;
// }
// export class UserTypelist {
//   name: string;
//   value: string;
// }

// export class UserStatuslist {
//   name: string;
//   value: string;
// }

// export class ManagerIdlist {
//   name: string;
//   value: string;
// }

// export class UserRolelist {
//   name: string;
//   value: string;
// }

// export class departmentlist {
//   name: string;
//   value: string;
// }
export class UserDialogData {
  id: string;
  UserID: string;
  SelectedBtn: Boolean;
}
export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
  refreshToken: string;
}

export class userResponse {
  isSuccess: boolean;
  message: string;
  userlist: UserMaster[];
}