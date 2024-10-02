import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { QuoteListComponent } from "./list/quote-list.component";
import { QuoteAddComponent } from "./add/quote-add.component";
import { QuoteUpdateComponent } from "./update/quote-update.component";
import { VectorListComponent } from "./list/vector-list/vector-list.component";
import { PatchListComponent } from "./list/patch-list/patch-list.component";

// Importing Views
import { DigitizingViewComponent } from "./view/DigitizingView/digitizing-view.component";
import { PatchViewComponent } from "./view/PatchView/patch-view.component";
import { VectorViewComponent } from "./view/VectorView/vector-view.component";



const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "list",
        component: QuoteListComponent,
        data: {
          title: "Quotes",
          breadcrumb: "",
        },
      },

      {
        path: "add",
        component: QuoteAddComponent,
        data: {
          title: "Add Quote",
          breadcrumb: "Add Quote",
        },
      },
      {
        path: "update",
        component: QuoteUpdateComponent,
        data: {
          title: "Update Quote",
          breadcrumb: "Update Quote",
        },
      },
      {
        path: "vector-list",
        component: VectorListComponent,
        data: {
          title: "Quote | Vector Artwork",
          breadcrumb: "Vector List",
        },
      },
      {
        path: "patch-list",
        component: PatchListComponent,
        data: {
          title: "Quote | Custom Patches",
          breadcrumb: "Patch Quotes",
        },
      },
      // Views START
      {
        path: "patch-view",
        component: PatchViewComponent,
        data: {
          title: "Quote | Custom Patches",
          breadcrumb: "Patch Quotes",
        },
      },
      {
        path: "vector-view",
        component: VectorViewComponent,
        data: {
          title: "Quote | Vector Artwork",
          breadcrumb: "Vector View",
        },
      },
      {
        path: "digitizing-view",
        component: DigitizingViewComponent,
        data: {
          title: "Quote | Emb Digitizing",
          breadcrumb: "Emb Digitizing",
        },
      },
      // Views END
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),RouterModule],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class QuoteRoutingModule {}
