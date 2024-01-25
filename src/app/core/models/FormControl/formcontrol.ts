export class FormControlCreation
{
    name:string;
    label:string;
    placeholder:string;
    type:string;
    value:any;
    validation:string;
    callfunction:string;
    filterOptions:any;
    autocomplete:string;
    displaywith:any;
    errormessage:string;
    errormessageforpattern:string
    generatecontrol:boolean
    disable:boolean
    mask?:string;
    suffix?:string;
    


    constructor(FormControlcc)
    {
        {
            this.name=FormControlcc.name||'';
            this.label=FormControlcc.label||'';
            this.placeholder=FormControlcc.placeholder||'';
            this.type=FormControlcc.type||'';
            this.value=FormControlcc.value||'';
            this.validation=FormControlcc.validation||'';
            this.callfunction=FormControlcc.callfunction||'';
            this.filterOptions=FormControlcc.filterOptions;
            this.autocomplete=FormControlcc.autocomplete||'';
            this.errormessage=FormControlcc.errormessage||'';
            this.generatecontrol=FormControlcc.generatecontrol||false;
            this.disable=FormControlcc.disable||false;
        }
    }
}
