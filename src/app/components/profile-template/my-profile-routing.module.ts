import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user-profile',
        component: MyProfileComponent,
        data: {
          title: "Profile",
          breadcrumb: "User Profile"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
