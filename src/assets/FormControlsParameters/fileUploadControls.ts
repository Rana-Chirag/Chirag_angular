import { FormControls } from "src/app/Models/FormControl/formcontrol";

export class fileUploadModel {
    private fileUploadControls: FormControls[];
    constructor() {
        this.fileUploadControls =
        [{name: "singleupload", label: "", placeholder: "singleupload", type: "", value: "", filterOptions: "", autocomplete: "", generatecontrol: false, disable: true, Validations: [
            {
                name: '',
            }
        ]}]
    }
    getFieldControls() {
        return this.fileUploadControls;
    }
}