import { Injectable, EventEmitter } from '@angular/core';

import { Contractor } from 'src/app/shared/contractor.model';


@Injectable({
  providedIn: 'root'
})
export class Contractorsservice {
  contractorChange = new EventEmitter<Contractor[]>();
  private contractors: Contractor[] = [
    new Contractor('SE', '79522344', 'Dupowo Górne'),
    new Contractor('KK', '22322114', 'Dupowo Dolne'),
  ];
  constructor() { }

  getContractors() {
    return [...this.contractors]
  }

  addContractor(contractor: Contractor) {
    this.contractors.push(contractor);
    this.contractorChange.emit([...this.contractors]);
  }
}
