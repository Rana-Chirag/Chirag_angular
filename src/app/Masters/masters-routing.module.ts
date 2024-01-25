import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMasterBoilerPlatComponent } from './add-master-boiler-plat/add-master-boiler-plat.component';
import { DriverMasterListComponent } from './Driver Master/driver-master-list/driver-master-list.component';
import { AddDriverMasterComponent } from './Driver Master/add-driver-master/add-driver-master.component';

const routes: Routes = [
  {path:"AddMasterBoilerPlat",component:AddMasterBoilerPlatComponent},
  {path:"DriverMaster/DriverMasterList",component:DriverMasterListComponent},
  {path:"DriverMaster/AddDriver",component:AddDriverMasterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }


