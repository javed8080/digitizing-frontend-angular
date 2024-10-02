import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SupportTicketService } from '../../shared/services/support-ticket.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderListComponent } from './list/order-list.component';
import { OrderAddComponent } from './add/order-add.component';
import { OrderUpdateComponent } from './update/order-update.component';
import { OrderRoutingModule } from './order-routing.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PendingListComponent } from './pending-list/pending-list.component';

@NgModule({
  declarations: [OrderListComponent,PendingListComponent,OrderAddComponent,OrderUpdateComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule,
    NgxDropzoneModule
  ],
  providers: [
    SupportTicketService
  ]
})
export class OrderModule { }
