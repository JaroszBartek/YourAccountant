import { Component, OnInit } from '@angular/core';

import { Invoice } from './invoice.model';
import { InvoicesService } from './invoices.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  selectedInvoice: Invoice;

  constructor(private invoicesService: InvoicesService) { }

  ngOnInit() {
    this.invoicesService.invoiceSelected
    .subscribe(
      (invoice: Invoice) => {
        this.selectedInvoice = invoice;
      }
    );
  }

}
