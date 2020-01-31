import { Component, OnInit } from '@angular/core';

import { Contractor } from 'src/app/shared/contractor.model';
import { Contractorsservice } from './contractors.service';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent implements OnInit {
  contractors: Contractor[];

  constructor(private contractorsService: Contractorsservice) { }

  ngOnInit() {
    this.contractors = this.contractorsService.getContractors();
    this.contractorsService.contractorChange
    .subscribe(
      (contractors: Contractor[] ) => {
        this.contractors = contractors;
      }
    )
  }

}
