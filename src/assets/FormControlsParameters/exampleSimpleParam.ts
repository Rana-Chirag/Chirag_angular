import { FormControls } from "src/app/Models/FormControl/formcontrol";

export class exampleSimpleControl {
    private exampleFormFields: FormControls[];
    constructor() {
        this.exampleFormFields =
            [
                
                {
                    name: 'EmpCode', label: ' Emp Code ', placeholder: 'Emp Code', type: 'text', value: '',
                    filterOptions: '', autocomplete: '',
                    displaywith: '', generatecontrol: true, disable: false,
                    Validations: [
                        {
                            name: "required",
                            message: "Emp Code is required"
                        }
                    
                    ],
                    functions: {
                        onKeyUp: 'checkUnique',
                    }

                }
                , 
              

                {
                    name: 'Name', label: ' Name', placeholder: 'Name', type: 'text', value: '',
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

                ,
                {
                    name: 'DateOfBirth', label: 'Date Of Birth', placeholder: 'Date Of Birth', type: 'date', value: '', filterOptions: '', autocomplete: '', displaywith: '',
                    generatecontrol: true, disable: false, Validations: [],
                    additionalData: {
                        maxDate: new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate()),
                        minDate: new Date("01 Jan 1900")
                    }
                },
                {
                    name: 'DateOfjoin', label: 'Date Of Join', placeholder: 'Date Of Join', type: 'date', value: '', filterOptions: '', autocomplete: '', displaywith: '',
                    generatecontrol: true, disable: false, Validations: [],
                    additionalData: {
                        
                        minDate: new Date("01 Jan 1900")
                    }
                },
                  {
                    name: "ROLEID",
                    label: "User Role",
                    placeholder: "User Role",
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
                        }
                        , {
                            name: "autocomplete",
                        },
                        {
                            name: "invalidAutocompleteObject",
                            message: "Choose proper value",
                        }
                    ],
                    functions: {

                    },
                    additionalData: {
                        isIndeterminate: false,
                        isChecked: false,
                    }
                },
                {
                    name: "MobileNo",
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
               

            ]

    }

    getFormControls(savedData?: any) {
        if(savedData !== undefined){
            this.exampleFormFields.forEach(field =>{
                let savedFieldData = '';
                try {
                    savedFieldData = savedData[field['name']]
                } catch (error) {                    
                    savedFieldData = ''
                }
                field.value = savedFieldData;
            })
        }
        return this.exampleFormFields;
    }

}