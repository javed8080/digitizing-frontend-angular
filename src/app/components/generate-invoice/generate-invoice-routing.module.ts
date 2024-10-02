import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GenerateInvoiceComponent } from "./list/generate-invoice.component";



const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: GenerateInvoiceComponent,
        data: {
          title: "Invoices",
          breadcrumb: "",
        },
      }
      // Views END
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),RouterModule],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GenerateInvoiceRoutingModule {}
