import { Component, OnInit } from '@angular/core';
import { Contractor } from 'src/app/shared/contractor.model';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent implements OnInit {
  contractors: Contractor[];
  constructor() { }

  ngOnInit() {
  }

  onContractorAdded(contractor: Contractor) {
    this.contractors.push(contractor);
  }

}
