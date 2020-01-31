import { Component, OnInit } from '@angular/core';

import { Invoice } from '../invoice.model';
import { InvoicesService } from '../invoices.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[];

  constructor(private invoicesService: InvoicesService) { }

  ngOnInit() {
    this.invoices = this.invoicesService.getInvoices();
  }

}
