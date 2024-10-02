import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { LoaderComponent } from "./components/loader/loader.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { ContentLayoutComponent } from "./components/layout/content-layout/content-layout.component";
import { FullLayoutComponent } from "./components/layout/full-layout/full-layout.component";
import { FeatherIconsComponent } from "./components/feather-icons/feather-icons.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { RightSidebarComponent } from "./components/right-sidebar/right-sidebar.component";
import { BookmarkComponent } from "./components/bookmark/bookmark.component";
import { TranslateModule } from "@ngx-translate/core";
import { CustomizerComponent } from "./components/customizer/customizer.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GalleryModule } from "@ks89/angular-modal-gallery";

// services
import { NavService } from "./services/nav.service";
import { ChatService } from "./services/chat.service";
import { CustomizerService } from "./services/customizer.service";
import { TableService } from "./services/table.service";
// Directives
import { ToggleFullscreenDirective } from "./directives/fullscreen.directive";
import { NgbdSortableHeader } from "./directives/NgbdSortableHeader";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { DigitizingOrderRecordsComponent } from '../components/orders/list/digitizing-order-records/digitizing-order-records.component';
import { PatchesOrderRecordsComponent } from '../components/orders/list/patches-order-records/patches-order-records.component';
import { VectorOrderRecordsComponent } from '../components/orders/list/vector-order-records/vector-order-records.component';
// import { OrdersModule } from '../orders/orders.module';
import {  EmbroideryListComponent } from '../components/embroidery-digitizing/list/embroidery-list.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
// DigitizingOrderRecordsComponent,PatchesOrderRecordsComponent,VectorOrderRecordsComponent,EmbroideryListComponent, 
@NgModule({
  declarations: [ LoaderComponent, HeaderComponent, FooterComponent, SidebarComponent, BookmarkComponent, RightSidebarComponent, ContentLayoutComponent, FullLayoutComponent, FeatherIconsComponent, ToggleFullscreenDirective, NgbdSortableHeader, BreadcrumbComponent, CustomizerComponent],
  imports: [CommonModule, RouterModule, FormsModule, TranslateModule, NgbModule, GalleryModule],
  exports: [LoaderComponent, FeatherIconsComponent, TranslateModule, NgbdSortableHeader,],
  providers: [NavService, ChatService, CustomizerService, TableService, NgbModule],
})
export class SharedModule {}
