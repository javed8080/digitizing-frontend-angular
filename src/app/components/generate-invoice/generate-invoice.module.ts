import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SupportTicketService } from '../../shared/services/support-ticket.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenerateInvoiceRoutingModule } from './generate-invoice-routing.module';
import { GenerateInvoiceComponent } from './list/generate-invoice.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [GenerateInvoiceComponent],
  imports: [
    CommonModule,
    GenerateInvoiceRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule,
    NgxDropzoneModule,
    NgxDatatableModule

  ],
  // exports: [VectorListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    SupportTicketService
  ]
})
export class GenerateInvoiceModule { }
