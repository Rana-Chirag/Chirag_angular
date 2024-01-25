import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadCommonService {

  constructor(private http: HttpClient) { }
    //Below the Post method  When You Need Post Api call that time you can use this function

  fileUploadPost(ApiURL, companyDetails) {
      return this.http.post<any>(
        `${environment.MasterBaseURL}${ApiURL}`,
        companyDetails
      );
    }
  
    //Below the Get method  When You Need Get Api call that time you can use this function
  
    GetfileUpload(ApiURL, req) {
      return this.http.get<any>(
        `${environment.MasterBaseURL}` + ApiURL + req
      );
    }
  
}
