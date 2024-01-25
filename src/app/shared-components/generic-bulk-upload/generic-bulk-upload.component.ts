import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/core/models/fileUpload';
import Swal from 'sweetalert2';
import { FileUploadCommonService } from "src/app/core/service/fileUpload/file-upload-common.service";
import * as XLSX from "xlsx";
type AOA = any[][];
@Component({
  selector: 'app-generic-bulk-upload',
  templateUrl: './generic-bulk-upload.component.html'
})
export class GenericBulkUploadComponent implements OnInit {
  // Input properties
  @Input() formData;
  @Input() downloadTemplate = ''; // Download template file name
  @Input() hrefTemplate = ''; // Template file URL
  @Input() fileParam = 'file'; // File parameter name for upload
  @Input() companyCode = 'CompanyCode'; // Company code parameter name
  @Input() fileName = 'FileName'; // File name parameter name
  @Input() uploadBy = 'UploadBy'; // Upload by parameter name
  @Input() moduleFileName = ''; // Module file name parameter name
  @Input() routePath=''; // Path for navigation after upload
  @Input() apiPath=''; // API path for file upload
  @Input() title=''; // Title for success/failure message
  @Input()moduleName='';
  // Excel data and flags
  refExcelData: Array<any>;
  isEmptyDrop = true;
  isExcelDrop = true;
  @Input()isDate;
  localwSheet: XLSX.WorkSheet;
  excelDataEncodeToJson: Array<any>;
  excelTransformNum: string[] = [];
  localWorkBook: XLSX.WorkBook;
  sheetCellRange: XLSX.Range;
  @Input() form ;
  sheetJsExcelName = 'null.xlsx';
  origExcelData: AOA = [];
  isPreview = 0;
  sheetMaxRow: number;
  isUpload = 0;
  isUploaded = false;
  sheetBufferRender: File;

  // File related properties
  public files: Array<FileUpload> = [];
  fileResponseData: any;
  
  constructor(
    public dialogRef: MatDialogRef<GenericBulkUploadComponent>,
    private rootFormGroup: FormGroupDirective,
    private router: Router,
    private fileUploadCommonService: FileUploadCommonService
  ) { 
    this.form = this.rootFormGroup.control;
  }

  ngOnInit(): void {
  }
  
  // Close dialog
  close() {
    this.dialogRef.close();
  }
  
  // Download template file
  download(): void {
    let link = document.createElement("a");
    link.download = this.downloadTemplate;
    link.href = this.hrefTemplate;
    link.click();
  }
  
  // Handle file selection
  inputExcelOnClick(evt) {
    const target: HTMLInputElement = evt.target;
    if (target.files.length === 0) {
      throw new Error("Please select a file");
    }
    if (target.files.length > 1) {
      throw new Error("Cannot use multiple files");
    }
    this.sheetJsExcelName = evt.target.files.item(0).name;
    const reader: FileReader = new FileReader();
    this.readerExcel(reader);
    this.isUpload = 1;
    reader.readAsArrayBuffer(target.files[0]);
    this.sheetBufferRender = target.files[0];
    this.selectFile(target.files[0]);
    this.uploadFiles();
    this.isEmptyDrop = false;
    this.isExcelDrop = true;
  }

  // File Upload Operation Start
  selectFile(event) {
    this.files.push({
      data: event,
    });
  }
  
  uploadFiles() {
    this.files.forEach((file) => {
      this.uploadFile(file);
    });
  }

  private uploadFile(file: FileUpload) {
    this.isUploaded = true;
    const fd = new FormData();
    fd.append(this.fileParam, file.data);
    fd.append(this.companyCode, localStorage.getItem("CompanyCode"));
    fd.append(this.fileName, this.moduleFileName);
    fd.append(this.uploadBy, localStorage.getItem("UserName"));
    this.fileUploadCommonService.fileUploadPost(this.apiPath,fd).subscribe(
      (res: any) => {
        this.isUploaded = false;
        if (res.isSucces) {
          this.fileResponseData = res;
          let filepath =
            "<a href='" +
            this.fileResponseData.filepath +
            "'>Click here to download result file</a>";
          Swal.fire({
            icon: "success",
            title: this.title + ' ' + "Details Uploaded Successfully!!!",
            html: filepath,
            showConfirmButton: true,
          });
          this.removeFileFromArray(file);
          this.router.navigateByUrl(this.routePath);
        } else if (!res.isSucces) {
          this.fileResponseData = res;
          if (this.fileResponseData.filepath) {
            let filepath =
              "<a href='" +
              this.fileResponseData.filepath +
              "'>Click here to download result file</a>";
            Swal.fire({
              icon: "error",
              title: this.title + ' ' + "Details not uploaded! Please check result file for more information",
              html: filepath,
              showConfirmButton: true,
            });
            this.removeFileFromArray(file);
          } else {
            Swal.fire({
              icon: "error",
              title: this.title + ' ' + "Details Not Uploaded",
              text: "Please try again after sometime",
              showConfirmButton: true,
            });
            this.removeFileFromArray(file);
          }
        }
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 500) {
            Swal.fire({
              icon: "error",
              title: this.title + ' ' + "Not Uploaded",
              text: "Please try again after sometime",
              showConfirmButton: true,
            });
            this.removeFileFromArray(file);
          } else if (err.status == 415) {
            Swal.fire({
              icon: "error",
              title: "File Not Uploaded",
              text: "Please Upload files in .xlsx, .xls, or .csv format",
              showConfirmButton: true,
            });
            this.removeFileFromArray(file);
          }
        }
      }
    );
  }
  
  // Read Excel file
  readerExcel(reader, index = 0) {
    /* reset array */
    this.origExcelData = [];
    reader.onload = (e: any) => {
      const data: string = e.target.result;
      const wBook: XLSX.WorkBook = XLSX.read(data, { type: "array" });
      this.localWorkBook = wBook;
      const wsname: string = wBook.SheetNames[index];
      const wSheet: XLSX.WorkSheet = wBook.Sheets[wsname];
      this.localwSheet = wSheet;
      this.sheetCellRange = XLSX.utils.decode_range(wSheet["!ref"]);
      this.sheetMaxRow = this.sheetCellRange.e.r;
      this.origExcelData = <AOA>XLSX.utils.sheet_to_json(wSheet, {
        header: 1,
        range: wSheet["!ref"],
        raw: true,
      });
      this.refExcelData = this.origExcelData
        .slice(1)
        .map((value) => Object.assign([], value));

      this.excelTransformNum = [];
      for (let idx = 0; idx <= this.sheetCellRange.e.c; idx++) {
        this.excelTransformNum[idx] = this.transform(idx);
      }

      this.refExcelData.map((x) => x.unshift("#"));
      this.excelTransformNum.unshift("order");

      this.excelDataEncodeToJson = this.refExcelData.slice(0).map((item) =>
        item.reduce((obj, val, i) => {
          obj[this.excelTransformNum[i]] = val;
          return obj;
        }, {})
      );
    };
  }
  
  // Convert column index to Excel column name
  transform(value) {
    return (
      (value >= 26 ? this.transform(((value / 26) >> 0) - 1) : "") +
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[value % 26 >> 0]
    );
  }
  
  private removeFileFromArray(file: FileUpload) {
    const index = this.files.indexOf(file);
    if (index > -1) {
      this.files.splice(index, 1);
    }
  }
}
