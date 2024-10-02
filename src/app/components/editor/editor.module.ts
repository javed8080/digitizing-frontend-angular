import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';
import { EditorRoutingModule } from './editor-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditorComponent } from './editor.component';

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    EditorRoutingModule,
    NgxEditorModule,
    AngularEditorModule,
    FormsModule
  ]
})
export class EditorModule { }
