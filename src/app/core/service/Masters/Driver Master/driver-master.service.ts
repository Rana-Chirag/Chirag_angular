import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DriverMasterService {

  private apiUrl = 'http://localhost:5000/webx/Data'; // replace with your actual backend URL


  constructor(private http: HttpClient) {}

  // getMasterCommon(URL,Request) {
  //   return this.http.get<any>(
  //     `${environment.MasterBaseURL}`+URL + Request
  //   );
  // }


  getMasterCommon(Request) {
    return this.http.get<any>(
      ` http://localhost:7265/api/DMS/Master/Driver/GetDriverDetails/` + Request
    );
  }

  getDept() {
    return this.http.get<any>(
      `http://127.0.0.1:5000/webx/dept/getDept`
    );
  }
  getState() {
    return this.http.get<any>(
      `http://127.0.0.1:5000/webx/state/AllState`
    );
  }

  getDesi(deptID:any) {
    return this.http.get<any>(
      `http://127.0.0.1:5000/webx/deg/getDesignation/${deptID}`
    );
  }

  getCity(cityID:any) {
    return this.http.get<any>(
      `http://127.0.0.1:5000/webx/city/getCity/${cityID}`
    );
  }

  // getDesignationsByDepartment(departmentId: string) {
  //   return this.http.get<any>(
  //     `http://127.0.0.1:5000/webx/deg/getDesignation/${departmentId}`
  //   );
  // }

  getCitiesByState(stateId: number) {
    return this.http.get<any>(
      `http://127.0.0.1:5000/webx/city/getCity/${stateId}`
    );
  }




  insertData(formData: any): Observable<any> {
    const url = `${this.apiUrl}/Insert`;
    return this.http.post(url, formData);
  }



  postMasterCommon(URL,Request) {
    return this.http.post<any>(
      `${environment.MasterBaseURL}`+URL,
      Request
    );
  }
}
