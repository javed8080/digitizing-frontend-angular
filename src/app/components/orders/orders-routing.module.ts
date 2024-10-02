import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importing Order-Records list
import { DigitizingOrderRecordsComponent } from './list/digitizing-order-records/digitizing-order-records.component';
import { PatchesOrderRecordsComponent } from './list/patches-order-records/patches-order-records.component';
import { VectorOrderRecordsComponent } from './list/vector-order-records/vector-order-records.component';
//Importing Order-Records (VIEW)
import { DigitizingOrderRecordsViewComponent } from './view/digitizing-order-records-view/digitizing-order-records-view.component';
import { PatchesOrderRecordsViewComponent } from './view/patches-order-records-view/patches-order-records-view.component';
import { VectorOrderRecordsViewComponent } from './view/vector-order-records-view/vector-order-records-view.component';


const routes: Routes = [
  {
    path: '',
    children:[
      // Order-Records START
      {
        path: "patch-order-records-list",
        component: PatchesOrderRecordsComponent,
        data: {
          title: "Orders | Custom Patch ",
          breadcrumb: "Patch Order Records",
        },
      },
      {
        path: "vector-order-records-list",
        component: VectorOrderRecordsComponent,
        data: {
          title: "Orders | Vector Artwork",
          breadcrumb: "Vector Order Records",
        },
      },
      {
        path: "digitizing-order-records-list",
        component: DigitizingOrderRecordsComponent,
        data: {
          title: "Orders | Emb Digitizing",
          breadcrumb: "Emb Digitizing Order Records",
        },
      },
      // Order-Records END

      // Order-Records (VIEW) START
      {
        path: "patch-order-records-view",
        component: PatchesOrderRecordsViewComponent,
        data: {
          title: "Orders | Custom Patch",
          breadcrumb: "Patch Order Records View",
        },
      },
      {
        path: "vector-order-records-view",
        component: VectorOrderRecordsViewComponent,
        data: {
          title: "Orders | Vector Artwork ",
          breadcrumb: "Vector Order Records View",
        },
      },
      {
        path: "digitizing-order-records-view",
        component: DigitizingOrderRecordsViewComponent,
        data: {
          title: "Orders | Emb Digitizing",
          breadcrumb: "Emb Digitizing Order Records View",
        },
      },
      // Order-Records (VIEW) END
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class OrdersRoutingModule { }
