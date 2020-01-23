import { Component, OnInit } from '@angular/core';
import { Invoice } from '../invoice.model';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [
    new Invoice('DE', 'DE Bart Jarosz', 'Glazera 38/10'),
    new Invoice('SE', 'SE Bart Jarosz', 'FFFFFF 38/10')
  ];

  constructor() { }

  ngOnInit() {
  }

}
