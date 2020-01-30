import { Component, OnInit } from '@angular/core';
import { Contractor } from 'src/app/shared/contractor.model';

@Component({
  selector: 'app-contractors',
  templateUrl: './contractors.component.html',
  styleUrls: ['./contractors.component.scss']
})
export class ContractorsComponent implements OnInit {
  contractors: Contractor[] = [
    new Contractor('SE', '79522344', 'Dupowo Górne'),
    new Contractor('KK', '22322114', 'Dupowo Dolne'),
  ];
  constructor() { }

  ngOnInit() {
  }

  onContractorAdded(contractor: Contractor) {
    this.contractors.push(contractor);
  }

}
