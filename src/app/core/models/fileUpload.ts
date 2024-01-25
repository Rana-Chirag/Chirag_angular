export class bulkUpload {
    isSuccess: boolean;
    filepath: string;
    constructor(Orderupload) {
      {
        this.filepath = Orderupload.filepath || '';
        this.isSuccess = Orderupload.isSuccess || false;
      }
    }
  }
  export class FileUpload {
    data: File;
  }