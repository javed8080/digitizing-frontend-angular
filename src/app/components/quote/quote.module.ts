import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SupportTicketService } from '../../shared/services/support-ticket.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuoteRoutingModule } from './quote-routing.module';
import { QuoteListComponent } from './list/quote-list.component';
import { QuoteUpdateComponent } from './update/quote-update.component';
import { QuoteAddComponent } from './add/quote-add.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {VectorListComponent } from './list/vector-list/vector-list.component';


@NgModule({
  declarations: [QuoteListComponent,QuoteAddComponent,QuoteUpdateComponent],
  imports: [
    CommonModule,
    QuoteRoutingModule,
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
export class QuotesModule { }
