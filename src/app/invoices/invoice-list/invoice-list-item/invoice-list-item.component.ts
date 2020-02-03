import { Component, OnInit, Input } from '@angular/core';

import { Invoice } from '../../invoice.model';
import { InvoicesService } from '../../invoices.service';

@Component({
  selector: 'app-invoice-list-item',
  templateUrl: './invoice-list-item.component.html',
  styleUrls: ['./invoice-list-item.component.scss']
})
export class InvoiceListItemComponent implements OnInit {
  @Input() invoiceInput: Invoice;

  constructor(private invoicesService: InvoicesService ) { }

  ngOnInit() {
  }
  onSelected() {
    this.invoicesService.invoiceSelected.emit(this.invoiceInput);
  }
}
