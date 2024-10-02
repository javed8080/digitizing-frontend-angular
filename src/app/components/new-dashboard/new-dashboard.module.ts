import { NewDashboardRoutingModule } from './new-dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHomeComponent } from './view/dashboard-home.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SupportTicketService } from '../../shared/services/support-ticket.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DigitizingOrderRecordsComponent } from '../orders/list/digitizing-order-records/digitizing-order-records.component';
import { PatchesOrderRecordsComponent } from '../orders/list/patches-order-records/patches-order-records.component';
import { VectorOrderRecordsComponent } from '../orders/list/vector-order-records/vector-order-records.component';
import { OrdersModule } from '../orders/orders.module';
import {  EmbroideryListComponent } from '../embroidery-digitizing/list/embroidery-list.component';
// DigitizingOrderRecordsComponent,PatchesOrderRecordsComponent,VectorOrderRecordsComponent,EmbroideryListComponent, 

@NgModule({
  declarations: [DashboardHomeComponent ],
  imports: [
    CommonModule,
    NewDashboardRoutingModule,
    NgbModule,
    FormsModule,
    NgxDropzoneModule,
    NgxDatatableModule,
    SharedModule,OrdersModule

  ],
  providers: [
    SupportTicketService
  ]
})
export class NewDashboardModule { }
