import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Editor } from 'ngx-editor';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  public htmlContent = '';
  public editor: Editor;
  public html = '';
  
  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editor.destroy();
  }





}
