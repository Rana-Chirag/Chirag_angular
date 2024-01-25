
export class exampledateControl {
    dateFormFields: ({ name: string; label: string; placeholder: string; type: string; value: string; filterOptions: string; autocomplete: string; displaywith: string; generatecontrol: boolean; disable: boolean; Validations: any[]; additionalData: { support: string; }; } | { name: string; label: string; placeholder: string; type: string; value: string; filterOptions: string; autocomplete: string; generatecontrol: boolean; disable: boolean; Validations: { name: string; }[]; displaywith?: undefined; additionalData?: undefined; })[];
    constructor(){
        this.dateFormFields=[  {
            name: 'StartDateRange', label: 'DateRangeDetails', placeholder: 'DateRange Details', type: 'daterangpicker', value: '', filterOptions: '', autocomplete: '', displaywith: '',
            generatecontrol: true, disable: false, Validations: [],
            additionalData: {
                support: "EndDateRange",
            }
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
  
    getDateControls(){
        return this.dateFormFields;
    }
}