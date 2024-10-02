import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SupportTicketService } from '../../shared/services/support-ticket.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { OrdersRoutingModule } from './orders-routing.module';
//Importing Order-Records list
import { DigitizingOrderRecordsComponent } from './list/digitizing-order-records/digitizing-order-records.component';
import { PatchesOrderRecordsComponent } from './list/patches-order-records/patches-order-records.component';
import { VectorOrderRecordsComponent } from './list/vector-order-records/vector-order-records.component';
import { NewDashboardModule } from '../new-dashboard/new-dashboard.module';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [PatchesOrderRecordsComponent,DigitizingOrderRecordsComponent,VectorOrderRecordsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule,
    NgxDropzoneModule,
    NgxDatatableModule
  ],
  exports: [PatchesOrderRecordsComponent,DigitizingOrderRecordsComponent,VectorOrderRecordsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    SupportTicketService
  ]
})
export class OrdersModule { }
