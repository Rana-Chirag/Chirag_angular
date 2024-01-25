import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoadPlanningComponent } from "./load-planning/load-planning.component";
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "LoadPlanning",
    pathMatch: "full",
  },
  {
    path: "LoadPlanning",
    component: LoadPlanningComponent,
  },
  {path:"DashBoard" , component: DashboardExampleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
