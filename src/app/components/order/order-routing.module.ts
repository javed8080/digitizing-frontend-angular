import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './list/order-list.component';
import { OrderAddComponent } from './add/order-add.component';
import { OrderUpdateComponent } from './update/order-update.component';
import { PendingListComponent } from './pending-list/pending-list.component';


const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: '',
        component: OrderListComponent,
        data: {
          title: "Orders",
          breadcrumb: ""
        }
      },

      {
        path: 'pending-list',
        component: PendingListComponent,
        data: {
          title: "Pending Orders",
          breadcrumb: ""
        }
      },

      {
        path: 'add',
        component: OrderAddComponent,
        data: {
          title: "Add Order",
          breadcrumb: "Add Order"
        }
      },

      {
        path: 'update',
        component: OrderUpdateComponent,
        data: {
          title: "Update Order",
          breadcrumb: "Update Order"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
