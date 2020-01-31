import { Injectable } from '@angular/core';
import { Contractor } from 'src/app/shared/contractor.model';

@Injectable({
  providedIn: 'root'
})
export class Contractorsservice {
  private contractors: Contractor[] = [
    new Contractor('SE', '79522344', 'Dupowo Górne'),
    new Contractor('KK', '22322114', 'Dupowo Dolne'),
  ];
  constructor() { }

  getContractors() {
    return [...this.contractors]
  }
}
