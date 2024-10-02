import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InvoiceDetailRoutingModule } from './invoice-detail-routing.module';
import { PaidInvoicesComponent } from "./list/paid-invoices/paid-invoices.component";
import { UninvoicedOrdersComponent } from "./list/uninvoiced-orders/uninvoiced-orders.component";
import { UnpaidInvoicesComponent } from "./list/unpaid-invoices/unpaid-invoices.component";


import { FormsModule } from '@angular/forms'; 
import { InvoiceDetialComponent } from './invoice-detial.component';

@NgModule({
  declarations: [PaidInvoicesComponent,UninvoicedOrdersComponent,UnpaidInvoicesComponent,InvoiceDetialComponent],
  imports: [
    CommonModule,
    InvoiceDetailRoutingModule,
    FormsModule,
    NgbModule
  ]
})
export class InvoiceDetailModule { }
