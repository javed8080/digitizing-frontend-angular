import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule } from './my-profile-routing.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SupportTicketService } from '../../shared/services/support-ticket.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MyProfileComponent } from './my-profile.component';

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    MyProfileRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule,
    NgxDropzoneModule
  ],
  providers: [
    SupportTicketService
  ]
})
export class MyProfileModule { }
