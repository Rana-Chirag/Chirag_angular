import { DriverMaster } from "src/app/Models/Driver Master/DriverMaster";
import { FormControls } from "src/app/Models/FormControl/formcontrol";

export class DriverControl {
    private DriverDetailsControl: FormControls[];
    private LicenseDetailsControls: FormControls[];
    private PermanentAddressControls: FormControls[];
    private CurrentAddressControls: FormControls[];
    constructor(IsUpdate: boolean) {
        this.DriverDetailsControl =
            [
                {
                    name: 'Driver_Name', label: ' Driver Name', placeholder: 'Enter Driver Name', type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Driver Name is required"
                        }
                        , {
                            name: "pattern",
                            message: "Please Enter only text",
                            pattern: '^[a-zA-Z ]*$',
                        }
                    ]
                },
                {
                    name: 'DFather_Name', label: "Driver's Father Name", placeholder: "Enter Driver's Father  Name", type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "pattern",
                            message: "Please Enter only text",
                            pattern: '^[a-zA-Z ]*$',
                        }
                    ]
                },
                {
                    name: 'Manual_Driver_Code', label: "Manual Driver Code", placeholder: "Enter Manual Driver Code", type: 'text', value: '', generatecontrol: true, disable: IsUpdate ? true : false,
                    Validations: [
                        {
                            name: "required",
                            message: "Please Enter Manual Driver Code"
                        }
                    ],
                    functions: {
                        onKeyUp: 'checkUnique',
                    }
                },
                {
                    name: "LocationcontrolHandler",
                    label: "Location",
                    placeholder: "Location",
                    type: "select",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Field is required.."
                        }
                    ],
                    additionalData: {
                        isIndeterminate: false,
                        isChecked: false,
                        support: "Location",
                        showNameAndValue: false
                    }
                },

                // {
                //     name: 'Driver_Location', label: " Driver Location", placeholder: "", type: 'dropdown', value: '', generatecontrol: true, disable:false,
                //     Validations: []
                // },
                // {
                //     name: 'VEHNO', label: "Vehicle Number", placeholder: "Enter Vehicle Number", type: 'text', value: DriverTable.vehno, generatecontrol: true, disable: IsUpdate?true:false,
                //     Validations: [
                //         {
                //             name: "required",
                //             message: "Please Enter Manual Driver Code"
                //         }
                //     ],
                //     functions: {
                //         onKeyUp: 'checkUnique',
                //     }
                // },
                {
                    name: 'VendorDriverCode', label: "Vendor Driver Code", placeholder: "Enter Vendor Driver Code", type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Please Enter Vendor Driver Code"
                        }
                    ]
                },
                {
                    name: 'Telno', label: "Contact Number", placeholder: "Enter Contact Number", type: 'number', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "pattern",
                            message: "Please enter 10 digit mobile number",
                            pattern: "^[0-9]{10}$",
                        }
                    ]
                },
                {
                    name: 'D_DOB', label: "Date of Birth", placeholder: "select Date Of Birth", type: 'date', value: '', generatecontrol: true, disable: false,
                    Validations: []
                },
                {
                    name: 'Guarantor_Name', label: "Guarantor Name", placeholder: "Enter Guarantor Name", type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "pattern",
                            message: "Please Enter only text",
                            pattern: '^[a-zA-Z ]*$',
                        }
                    ]
                },
                {
                    name: 'GuarantorMobileNo', label: 'GuarantorMobileNo', placeholder: 'Enter Guarantor Mobile No', type: 'number', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "pattern",
                            message: "Please enter 10 digit mobile number",
                            pattern: "^[0-9]{10}$",
                        }
                    ]
                },
                // {
                //     name: 'D_category', label: 'GuarantorMobileNo', placeholder: 'Enter Guarantor Mobile No', type: 'dropdown', value: DriverTable.guarantorMobileNo, generatecontrol: true, disable: false,
                //     Validations: [
                //         {
                //             name: "pattern",
                //             message: "Please enter 10 digit mobile number",
                //             pattern: "^[0-9]{10}$",
                //         }
                //     ]                   
                // },
                {
                    name: 'JoiningDate', label: 'Joining Date', placeholder: 'Enter Joining Date', type: 'date', value: '', generatecontrol: true, disable: false,
                    Validations: []

                },
                {
                    name: 'ReJoiningDate', label: 'ReJoining Date', placeholder: 'Enter ReJoining Date', type: 'date', value: '', generatecontrol: true, disable: false,
                    Validations: []

                },
                {
                    name: 'ActiveFlag', label: 'Active Flag', placeholder: '', type: 'toggle', value: '', generatecontrol: true, disable: false,
                    Validations: []
                },
                {
                    name: 'CompanyCode', label: 'CompanyCode', placeholder: '', type: 'text', value: 10065, generatecontrol: false, disable: false,
                    Validations: []

                },
                {
                    name: 'Driver_Id', label: 'Driver_Id', placeholder: '', type: 'text', value:'', generatecontrol: false, disable: false,
                    Validations: []

                },

            ],
            this.LicenseDetailsControls=
            [
                {
                    name: 'License_No', label: 'License No', placeholder: 'Enter License No', type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [ ]
                },
                {
                    name: 'Issue_By_RTO', label: 'Issue By RTO', placeholder: 'Enter Issue By RTO', type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [ ]
                },
                {
                    name: 'Valdity_dt', label: "Valdity Date", placeholder: "select Valdity Date", type: 'date', value: '', generatecontrol: true, disable: false,
                    Validations: []
                },
                {
                    name: 'BlackListedReason', label: 'BlackListed Reason', placeholder: 'Enter BlackListed Reason', type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: []
                },
                {
                    name: 'IsBlackListed', label: 'IsBlackListed', placeholder: '', type: 'toggle', value: '', generatecontrol: true, disable: false,
                    Validations: []
                },
                {
                    name: 'IsUpdate', label: 'IsUpdate', placeholder: '', type: 'text', value:false, generatecontrol: false, disable: false,
                    Validations: []
                },

            ],
            this.PermanentAddressControls=[
                {
                    name: 'P_Address', label: 'Permanent Address', placeholder: 'Enter Permanent Address', type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Permanent address is required"
                        }
                    ]
                },
                {
                    name: 'P_City', label: 'Permanent City', placeholder: 'Enter Permanent City', type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Permanent City is required"
                        }
                    ]
                },
                {
                    name: 'P_Pincode', label: 'Permanent Pincode', placeholder: 'Enter Permanent Pincode', type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Permanent Pincode is required"
                        }
                        , {
                            name: "pattern",
                            message: "Please enter 6 digit Pincode",
                            pattern: '^[1-9][0-9]{5}$',
                        }
                    ]
                },
            ],
            this.CurrentAddressControls=[
                {
                    name: 'C_Address', label: 'Current Address', placeholder: 'Enter Current Address', type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Current address is required"
                        }
                    ]
                },
                {
                    name: 'C_City', label: 'Current City', placeholder: 'Enter Current City', type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Current City is required"
                        }
                    ]
                },
                {
                    name: "Location", label: "", placeholder: "Multi Locations Access", type: "", value: "", filterOptions: "", autocomplete: "", generatecontrol: false, disable: true,
                    Validations: [
                        {
                            name: "required",
                        }

                    ],
                    
                },
                {
                    name: 'C_Pincode', label: 'Current Pincode', placeholder: 'Enter Current Pincode', type: 'text', value: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Current Pincode is required"
                        }
                        , {
                            name: "pattern",
                            message: "Please enter 6 digit Pincode",
                            pattern: '^[1-9][0-9]{5}$',
                        }
                    ]
                },
            ]
    }
    getFormControlsD() {
        return this.DriverDetailsControl;
    }
    getFormControlsL() {
        return this.LicenseDetailsControls;
    }
    getFormControlsP() {
        return this.PermanentAddressControls;
    }
    getFormControlsC() {
        return this.CurrentAddressControls;
    }
}