import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Contractor } from 'src/app/shared/contractor.model';

@Component({
  selector: 'app-contractors-edit',
  templateUrl: './contractors-edit.component.html',
  styleUrls: ['./contractors-edit.component.scss']
})
export class ContractorsEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('nipInput', { static: false }) nipInputRef: ElementRef;
  @ViewChild('addressInput', { static: false }) addressInputRef: ElementRef;
  @Output() contractorAdded = new EventEmitter<Contractor>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const contrName = this.nameInputRef.nativeElement.value;
    const contrNip = this.nipInputRef.nativeElement.value;
    const contraddress = this.addressInputRef.nativeElement.value;
    const newContractor = new Contractor(contrName, contrNip, contraddress);
    this.contractorAdded.emit(newContractor);
  }

}
