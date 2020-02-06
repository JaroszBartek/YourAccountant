import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicesComponent } from './invoices/invoices.component';
import { CrmComponent } from './crm/crm.component';
import { AuthComponent } from './auth/auth.component';
import { InvoiceDetailComponent } from './invoices/invoice-detail/invoice-detail.component';
import { InvoicesStartComponent } from './invoices/invoices-start/invoices-start.component';
import { InvoicesEditComponent } from './invoices/invoices-edit/invoices-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/invoices', pathMatch: 'full' },
  {
    path: 'invoices', component: InvoicesComponent, children: [
      { path: '', component: InvoicesStartComponent },
      { path: 'new', component: InvoicesEditComponent },
      { path: ':id', component: InvoiceDetailComponent },
      { path: ':id/edit', component: InvoicesEditComponent }
    ]
  },
  { path: 'crm', component: CrmComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
