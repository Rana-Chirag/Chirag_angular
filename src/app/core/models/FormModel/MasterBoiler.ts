export class MasterBoiler {

    Code: string;
    Name: string;
    Type: string;
    Alias: string;
    activeflag: any;
    srNo:any;
    isActive: boolean;

    constructor(MasterBoiler) {
        {
            this.Name = MasterBoiler.Name || '';
            this.Code = MasterBoiler.Code || '';
            this.activeflag=MasterBoiler.activeflag||false;
        }
    }
}
export class AutoCompleteCommon {
    constructor(public Value: string, public Name: string) { }
 }