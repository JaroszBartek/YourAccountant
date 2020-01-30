import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Invoice } from '../../invoice.model';

@Component({
  selector: 'app-invoice-list-item',
  templateUrl: './invoice-list-item.component.html',
  styleUrls: ['./invoice-list-item.component.scss']
})
export class InvoiceListItemComponent implements OnInit {
  @Input() invoiceInput: Invoice;
  @Output() invoiceSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.invoiceSelected.emit();
  }
}
