import { Component, OnInit } from '@angular/core';

import { Invoice } from './invoice.model';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {
  selectedInvoice: Invoice;
  constructor() { }

  ngOnInit() {
  }

}
