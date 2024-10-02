import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmbroideryListComponent } from './list/embroidery-list.component';
import { EmbroideryAddComponent } from './add/embroidery-add.component';
import { EmbroideryUpdateComponent } from './update/embroidery-update.component';
import { IvoiceTemplateComponent } from '../ivoice-template/ivoice-template.component';
import { EmbroideryViewComponent } from './view/embroidery-view.component';

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'list',
        component: EmbroideryListComponent,
        data: {
          title: "Digitizing Orders",
          breadcrumb: "Listing"
        }
      },

      {
        path: 'add',
        component: EmbroideryAddComponent,
        data: {
          title: "Add Embroidery",
          breadcrumb: "Add Embroidery"
        }
      },

      {
        path: 'update',
        component: EmbroideryUpdateComponent,
        data: {
          title: "Update Embroidery",
          breadcrumb: "Update Embroidery"
        }
      },
      {
        path: 'view',
        component: EmbroideryViewComponent,
        data: {
          title: "View Embroidery",
          breadcrumb: "View Embroidery"
        }
      },
      {
        path: 'invoice',
        component: IvoiceTemplateComponent,
        data: {
          title: "Invoice Template",
          breadcrumb: "Invoice View"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmbroideryRoutingModule { }
