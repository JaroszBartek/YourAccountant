import { Injectable, EventEmitter } from '@angular/core';

import { Invoice } from './invoice.model';
import { Contractor } from '../shared/contractor.model';
import { Contractorsservice } from '../crm/contractors/contractors.service';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {
  invoiceSelected = new EventEmitter<Invoice>();

  private invoices: Invoice[] = [
    new Invoice('1-1-2019', '1-1-2019', 'DE Bart Jarosz', '100$',
      [
        new Contractor('SE', '79522344', 'InvoiceService')
      ]),
    new Invoice('2-1-2019', '1-1-2019', 'DE Bart Jarosz', '300$',
      [
        new Contractor('kk', '700044', 'InvoiceService')
      ])
  ];
  constructor(private contractorsService: Contractorsservice) { }

  getInvoices() {
    return [...this.invoices];
  }

  getInvoice(index: number) {
    return this.invoices[index];
  }

  addContractorToList(contractors: Contractor[]) {
    this.contractorsService.addContractors(contractors);
  }
}
