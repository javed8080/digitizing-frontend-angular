import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './view/dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: "home",
        component: DashboardHomeComponent,
        data: {
          title: "Dashboard | Home ",
          breadcrumb: "Dashboard Home ",
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewDashboardRoutingModule { }
