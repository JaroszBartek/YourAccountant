import { Component, OnInit, Input } from '@angular/core';

import { Invoice } from '../invoice.model';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
  @Input() invoice: Invoice;
  constructor() { }

  ngOnInit() {
  }

}
