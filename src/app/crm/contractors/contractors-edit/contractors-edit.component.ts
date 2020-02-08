import { Component, OnInit } from '@angular/core';

import { Contractor } from 'src/app/shared/contractor.model';
import { Contractorsservice } from '../contractors.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contractors-edit',
  templateUrl: './contractors-edit.component.html',
  styleUrls: ['./contractors-edit.component.scss']
})
export class ContractorsEditComponent implements OnInit {

  constructor(private contractorsService: Contractorsservice) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value
    const newContractor = new Contractor(value.name, value.nip, value.address);
    this.contractorsService.addContractor(newContractor);
  }

}
