/**
 * additionalData : is a object, when we want some field specific needs, we can save that data in this property.
 * functions : is a object, which should contain <event : functionName> type of property. see example parameters.
 *  the functionName named function should be then declared in the actual component (parent), which is using the form component.
 *
 */
export class FormControls {
    name: string;
    label: string;
    placeholder: string;
    type: string;
    value: any;
    filterOptions?: any;
    autocomplete?: string;
    displaywith?: any;
    generatecontrol: boolean
    disable: boolean
    mask?: string;
    suffix?: string;
    Validations: any[];

    additionalData ?: any;
    functions ?: functionss

    constructor(FormControlcc) {
        {
            this.generatecontrol = FormControlcc.generatecontrol || false;
            this.disable = FormControlcc.disable || false;
        }
    }
}

export interface functionss{
    onKeyUp?: string
    onChange?: string
    onKeyDown?: string
    onToggleAll?: string
    onDateChange?: string
    onClick?: string
    onModelChange?: string
    onOptionSelect?:string
}
