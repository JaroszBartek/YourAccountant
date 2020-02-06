import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Invoice } from '../invoice.model';
import { InvoicesService } from '../invoices.service';


@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[];

  constructor(private invoicesService: InvoicesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.invoices = this.invoicesService.getInvoices();
  }

  onNewInvoice() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
