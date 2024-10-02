import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { SupportTicketService } from '../../shared/services/support-ticket.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmbroideryRoutingModule } from './embroidery-routing.module';
import { EmbroideryListComponent } from './list/embroidery-list.component';
import { EmbroideryAddComponent } from './add/embroidery-add.component';
import { EmbroideryUpdateComponent } from './update/embroidery-update.component';
import { EmbroideryViewComponent } from './view/embroidery-view.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [EmbroideryListComponent,EmbroideryAddComponent,EmbroideryUpdateComponent,EmbroideryViewComponent],
  imports: [
    CommonModule,
    EmbroideryRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule,
    NgxDropzoneModule,
    NgxDatatableModule

  ],
  exports: [EmbroideryListComponent,EmbroideryAddComponent,EmbroideryUpdateComponent,EmbroideryViewComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    SupportTicketService
  ]
})
export class EmbroideryModule { }
