import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaidInvoicesComponent } from "./list/paid-invoices/paid-invoices.component";
import { UninvoicedOrdersComponent } from "./list/uninvoiced-orders/uninvoiced-orders.component";
import { UnpaidInvoicesComponent } from "./list/unpaid-invoices/unpaid-invoices.component";
import { InvoiceDetialComponent } from "./invoice-detial.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "list",
        component: InvoiceDetialComponent,
        data: {
          title: "Invoice Detail",
          breadcrumb: "Invoice Detail List",
        },
      },
      {
        path: "paid-invoice-list",
        component: PaidInvoicesComponent,
        data: {
          title: "Paid Invoice",
          breadcrumb: "Paid Invoice List",
        },
      },
      {
        path: "unpaid-invoice-list",
        component: UnpaidInvoicesComponent,
        data: {
          title: "Unpaid Invoice",
          breadcrumb: "Unpaid Invoice List",
        },
      },
      {
        path: "uninvoiced-orders-list",
        component: UninvoicedOrdersComponent,
        data: {
          title: "Un-invoiced Order",
          breadcrumb: "Uninvoiced Orders List",
        },
      },

      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceDetailRoutingModule { }
