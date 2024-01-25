import { exampleFormControls } from "src/app/Models/Example Model/exampleModel";
import { FormControls } from "src/app/Models/FormControl/formcontrol";

export class exampleControl {
    private exampleFormFields: FormControls[];
    constructor(formControls: exampleFormControls, IsUpdate: boolean) {
        this.exampleFormFields =
            [
               

                {
                    name: 'EmpCode', label: 'Employee Code', placeholder: 'Employee Code', type: 'text', value: formControls.EmpCode,
                    filterOptions: '', autocomplete: '',
                    displaywith: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Employee Code is required"
                        }
                    
                    ],
                    functions: {
                        onKeyUp: 'checkUnique',
                    }

                },
           
                {
                    name: "EmpName",
                    label: "Employee Name",
                    placeholder: "Employee Name",
                    type: "text",
                    value: formControls.EmpName,
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Name is required"
                        }
                        
                    ]
                },

                {
                    name: "DesignationcontrolHandlerState",
                    label: "State",
                    placeholder: "State",
                    type: "dropdown",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "State is required.."
                        }
                    ],
                    additionalData: {
                        isIndeterminate: false,
                        isChecked: false,
                        support: "Designation",
                        showNameAndValue: false,
                        
                    },
                    functions:{
                        onOptionSelect:"loadCity"
                    }
                },

                {
                    name: "DesignationcontrolHandlercity",
                    label: "City",
                    placeholder: "City",
                    type: "dropdown",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "City is required.."
                        }
                    ],
                    additionalData: {
                        isIndeterminate: false,
                        isChecked: false,
                        support: "Designation",
                        showNameAndValue: false
                    }  
                },
                {
                    name: "DesignationcontrolHandler1",
                    label: "Department",
                    placeholder: "Department",
                    type: "dropdown",
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
                        support: "Designation",
                        showNameAndValue: false
                    },
                    functions:{
                        onOptionSelect:"loadDes"
                    }
                },
     
                {
                    name: "DesignationcontrolHandler",
                    label: "Designation",
                    placeholder: "Designation",
                    type: "dropdown",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
            
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Designation is required.."
                        }
                    ],
                    additionalData: {
                        isIndeterminate: false,
                        isChecked: false,
                        support: "Designation",
                        showNameAndValue: false
                    }
                }, 
                // {
                //     name: "EmailId",
                //     label: "Email ID",
                //     placeholder: "Email ID",
                //     type: "text",
                //     value: formControls.EmailId,
                //     filterOptions: "",
                //     autocomplete: "",
                //     displaywith: "",
                //     generatecontrol: true,
                //     disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //             message: "Email is required"
                //         }
                //         , {
                //             name: "email",
                //             message: "Enter Valid Email ID!",
                //         }
                //     ]
                // },
                // {
                //     name: "MobileNo",
                //     label: "Mobile",
                //     placeholder: "Mobile",
                //     type: "number",
                //     value: formControls.MobileNo,
                //     filterOptions: "",
                //     autocomplete: "",
                //     displaywith: "",
                //     generatecontrol: true,
                //     disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //             message: "Mobile is required"
                //         }
                //         , {
                //             name: "pattern",
                //             message: "Please enter 10 digit mobile number",
                //             pattern: '^((\\+91-?)|0)?[0-9]{10}$',
                //         }
                //     ]
                // },
                // {
                //     name: "ROLEID",
                //     label: "State",
                //     placeholder: "State",
                //     type: "dropdown",
                //     value: "",
                //     filterOptions: "",
                //     autocomplete: "",
                //     displaywith: "",
                //     generatecontrol: true,
                //     disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //         }
                //         , {
                //             name: "autocomplete",
                //         },
                //         {
                //             name: "invalidAutocompleteObject",
                //             message: "Choose proper value",
                //         }
                //     ],
                //     functions: {

                //     },
                //     additionalData: {
                //         isIndeterminate: false,
                //         isChecked: false,
                //     }
                // },
                // {
                //     name: "LocationcontrolHandler",
                //     label: "State",
                //     placeholder: "State",
                //     type: "dropdown",
                //     value: "",
                //     filterOptions: "",
                //     autocomplete: "",
                //     displaywith: "",
                //     generatecontrol: true,
                //     disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //         }
                //         , {
                //             name: "invalidAutocompleteObject",
                //             message: "Choose proper value",
                //         }
                //         , {
                //             name: "autocomplete",
                //         }
                //     ],
                //     functions: {
                //         onToggleAll: 'toggleSelectAll'
                //     },
                //     additionalData: {
                //         showNameAndValue: true,
                //         isIndeterminate: false,
                //         isChecked: false,
                //         support: "Location",
                //     }
                // },
                // {
                //     name: "CitycontrolHandler",
                //     label: "City",
                //     placeholder: "City",
                //     type: "dropdown",
                //     value: "",
                //     filterOptions: "",
                //     autocomplete: "",
                //     displaywith: "",
                //     generatecontrol: true,
                //     disable: false,
                //     Validations: [
                //         {
                //             name: "required",
                //         }
                //         , {
                //             name: "invalidAutocompleteObject",
                //             message: "Choose proper value",
                //         }
                //         , {
                //             name: "autocomplete",
                //         }
                //     ],
                //     functions: {
                //         onToggleAll: 'toggleSelectAll'
                //     },
                //     additionalData: {
                //         showNameAndValue: true,
                //         isIndeterminate: false,
                //         isChecked: false,
                //         support: "Location",
                //     }
                // },
              

                 {
                    name: 'DateOfBirth', label: 'Date Of Birth', placeholder: 'Date Of Birth', type: 'date', value: '', filterOptions: '', autocomplete: '', displaywith: '',
                    generatecontrol: true, disable: false, Validations: [],
                    additionalData: {
                        maxDate: new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
                        minDate: new Date("01 Jan 1900")
                    }
                },
                {
                    name: 'JoiningDate', label: 'Joining Date', placeholder: 'Joining Date', type: 'date', value: new Date(formControls?.JoiningDate || new Date()), filterOptions: '', autocomplete: '', displaywith: '',
                    generatecontrol: true, disable: false, Validations: [],
                    // additionalData: {
                    //     maxDate: new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
                    //     minDate: new Date("01 Jan 1900")
                    // }
                },
               
                // {
                //     name: 'StartDateRange', label: 'DateRangeDetails', placeholder: 'DateRange Details', type: 'daterangpicker', value: '', filterOptions: '', autocomplete: '', displaywith: '',
                //     generatecontrol: true, disable: false, Validations: [],
                //     additionalData: {
                //         support: "EndDateRange",
                //     }
                // },
               
                // {
                //     name: 'meetingtime', label: 'Meeting Time', placeholder: 'Birth Date', type: 'time', value: '', filterOptions: '', autocomplete: '', displaywith: '',
                //     generatecontrol: true, disable: false, Validations: [],
                //     additionalData: {
                //         maxDate: new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
                //         minDate: new Date("01 Jan 1900")
                //     }
                // },
                
                
                // {
                //     name: 'ActiveFlag', label: 'Active Flag', placeholder: '', type: 'toggle', value: "", generatecontrol: true, disable: false,
                //     Validations: []
                // },

                //   ---------------Add support Controllers at last -----------------------
                {
                    name: "Location", label: "", placeholder: "Multi Locations Access", type: "", value: "", filterOptions: "", autocomplete: "", generatecontrol: false, disable: true, Validations: [
                        {
                            name: 'required',
                        }
                    ]
                },
                {
                    name: "Designation", label: "", placeholder: "Multi Locations Access", type: "", value: "", filterOptions: "", autocomplete: "", generatecontrol: false, disable: true,
                    Validations: [
                        {
                            name: "required",
                        }

                    ],

                },
                {
                    name: "EndDateRange", label: "", placeholder: "end Date", type: "", value: "", filterOptions: "", autocomplete: "", generatecontrol: false, disable: true,
                    Validations: [
                        {
                            name: "",
                        }

                    ],

                },


            ]

    }

    getFormControls() {
        return this.exampleFormFields;
    }

}