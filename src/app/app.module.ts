import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './header/header.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './invoices/invoice-detail/invoice-detail.component';
import { InvoiceListItemComponent } from './invoices/invoice-list/invoice-list-item/invoice-list-item.component';
import { CrmComponent } from './crm/crm.component';
import { ContractorsComponent } from './crm/contractors/contractors.component';
import { ContractorsEditComponent } from './crm/contractors/contractors-edit/contractors-edit.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvoicesComponent, InvoiceListComponent, InvoiceDetailComponent, InvoiceListItemComponent, CrmComponent, ContractorsComponent, ContractorsEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
