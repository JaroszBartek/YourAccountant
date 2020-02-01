import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Invoice } from '../invoice.model';
import { InvoicesService } from '../invoices.service';


@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {
  invoice: Invoice;
  id: number;

  constructor(private invoiceService: InvoicesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.invoice = this.invoiceService.getInvoice(this.id);
        }
      );
  }

  onAddToContractorsList() {
    this.invoiceService.addContractorToList(this.invoice.contractors);
  }

  onEditInvoice() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
