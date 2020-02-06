import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesStartComponent } from './invoices-start.component';

describe('InvoicesStartComponent', () => {
  let component: InvoicesStartComponent;
  let fixture: ComponentFixture<InvoicesStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoicesStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
