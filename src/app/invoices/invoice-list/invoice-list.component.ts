import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Invoice } from '../invoice.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  @Output() invoiceWasSelected = new EventEmitter<Invoice>();
  invoices: Invoice[] = [
    new Invoice('1-1-2019', '1-1-2019', 'DE Bart Jarosz', '100$'),
    new Invoice('2-1-2019', '1-1-2019', 'DE Bart Jarosz', '300$'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onInvoiceSelected(invoice: Invoice) {
    this.invoiceWasSelected.emit(invoice);
  }

}
