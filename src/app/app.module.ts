import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { AuthComponent } from './auth/auth.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { InvoicesStartComponent } from './invoices/invoices-start/invoices-start.component';
import { InvoicesEditComponent } from './invoices/invoices-edit/invoices-edit.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvoicesComponent, InvoiceListComponent, InvoiceDetailComponent, InvoiceListItemComponent, CrmComponent, ContractorsComponent, ContractorsEditComponent, AuthComponent, SpinnerComponent, AlertComponent, InvoicesStartComponent, InvoicesEditComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
