import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EmailRoutingModule } from './email-routing.module';
import { EmailComponent } from './email.component';

@NgModule({
  declarations: [EmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    EmailRoutingModule,
    NgxEditorModule
  ]
})
export class EmailModule { }
