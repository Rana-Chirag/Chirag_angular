import { FormControls } from "src/app/Models/FormControl/formcontrol";

export class exampleAccordionModel {
    private examplemodelFields1: FormControls[];
    private examplemodelFields2: FormControls[];
    private examplemodelFields3: FormControls[];
    constructor() {
        this.examplemodelFields1 =
            [
                {
                    name: 'drivername', label: 'Driver Name', placeholder: 'Driver Name', type: 'text', value: '',
                    filterOptions: '', autocomplete: '',
                    displaywith: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "name is required"
                        }
                        , {
                            name: "pattern",
                            message: "Please Enter only text",
                            pattern: '',
                        }
                    ],
                    functions: {
                        onKeyUp: 'checkUnique',
                    }

                }
                , {
                    name: "UserPwd",
                    label: "Password",
                    placeholder: "Password",
                    type: "password",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true, // needs to toogle it , when updating 
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Password required!"
                        }
                        , {
                            name: "pattern",
                            message: "Please enter password which must be between 8 and 12 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*_=+-)",
                            pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$',
                        }
                    ],
                    additionalData: {
                        showPassword: false,
                        inputType: "password"
                    },
                },
                {
                    name: "confirmpassword",
                    label: "Confirm Password",
                    placeholder: "Confirm Password",
                    type: "password",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Confirm Password required!"
                        }
                    ],
                    additionalData: {
                        showPassword: false,
                        inputType: "password"
                    },
                    functions: {
                        onChange: "confirmPasswordIsEqual",
                    }
                },
                {
                    name: "mobileno",
                    label: "Mobile",
                    placeholder: "Mobile",
                    type: "number",
                    value: '',
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Mobile is required"
                        }
                        , {
                            name: "pattern",
                            message: "Please enter 10 digit mobile number",
                            pattern: '^((\\+91-?)|0)?[0-9]{10}$',
                        }
                    ]
                },
                {
                    name: "EmailId",
                    label: "Email ID",
                    placeholder: "Email ID",
                    type: "text",
                    value: '',
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Email is required"
                        }
                        , {
                            name: "email",
                            message: "Enter Valid Email ID!",
                        }
                    ]
                },
                {
                    name: 'D_DOB', label: 'Date Of Birth', placeholder: 'Date Of Birth', type: 'date', value: '', filterOptions: '', autocomplete: '', displaywith: '',
                    generatecontrol: true, disable: false, Validations: [],
                    additionalData: {
                        maxDate: new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
                        minDate: new Date("01 Jan 1900")
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
                {
                    name: "RoutecontrolHandler",
                    label: "Route",
                    placeholder: "Route",
                    type: "multiselect",
                    value: "",
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                        }
                        , {
                            name: "invalidAutocompleteObject",
                            message: "Choose proper value",
                        }
                        , {
                            name: "autocomplete",
                        }
                    ],
                    functions: {
                        onToggleAll: 'toggleSelectAll'
                    },
                    additionalData: {
                        isIndeterminate: false,
                        isChecked: false,
                        support: "Route",
                    }
                },

                {
                    name: '', label: '', placeholder: 'Date Of Birth', type: 'daterangpicker', value: '', filterOptions: '', autocomplete: '', displaywith: '',
                    generatecontrol: true, disable: false, Validations: [],
                    additionalData: {
                        maxDate: new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
                        minDate: new Date("01 Jan 1900")
                    }
                },

           
                 {
                    name: "Location", label: "", placeholder: "Multi Locations Access", type: "", value: "", filterOptions: "", autocomplete: "", generatecontrol: false, disable: true, Validations: [
                        {
                            name: 'required',
                        }
                    ]
                },
                {
                    name: "Route", label: "", placeholder: "Route", type: "", value: "", filterOptions: "", autocomplete: "", generatecontrol: false, disable: true, Validations: [
                        {
                            name: 'required',
                        }
                    ]
                },
            ]
        this.examplemodelFields2 =
            [
                {
                    name: 'Username', label: 'UserName', placeholder: 'UserName', type: 'text', value: '',
                    filterOptions: '', autocomplete: '',
                    displaywith: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "name is required"
                        }
                        , {
                            name: "pattern",
                            message: "Please Enter only text",
                            pattern: '',
                        }
                    ],

                }
                ,
                {
                    name: "mobileno",
                    label: "Mobile",
                    placeholder: "Mobile",
                    type: "number",
                    value: '',
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Mobile is required"
                        }
                        , {
                            name: "pattern",
                            message: "Please enter 10 digit mobile number",
                            pattern: '^((\\+91-?)|0)?[0-9]{10}$',
                        }
                    ]
                },
                {
                    name: "emailid",
                    label: "Email ID",
                    placeholder: "Email ID",
                    type: "text",
                    value: '',
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Email is required"
                        }
                        , {
                            name: "email",
                            message: "Enter Valid Email ID!",
                        }
                    ]
                },
            ]
        this.examplemodelFields3 =
            [
                {
                    name: 'locationname', label: 'Location Name', placeholder: 'Location Name', type: 'text', value: '',
                    filterOptions: '', autocomplete: '',
                    displaywith: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "pattern",
                            message: "Please Enter only text",
                            pattern: '',
                        }
                    ],

                },
                {
                    name: "locationCode",
                    label: "locationCode",
                    placeholder: "locationCode",
                    type: "number",
                    value: '',
                    filterOptions: "",
                    autocomplete: "",
                    displaywith: "",
                    generatecontrol: true,
                    disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Mobile is required"
                        }
                        , {
                            name: "pattern",
                            message: "Please enter 3 number as code",
                            pattern: '^((\\+91-?)|0)?[0-9]{3}$',
                        }
                    ]
                },
                
            ]

    }

    getFieldControls1() {
        return this.examplemodelFields1;
    }
    getFieldControls2() {
        return this.examplemodelFields2;
    }
    getFieldControls3() {
        return this.examplemodelFields3;
    }

}