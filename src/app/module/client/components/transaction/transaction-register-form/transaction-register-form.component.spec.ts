import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionRegisterFormComponent } from './transaction-register-form.component';

describe('TransactionRegisterFormComponent', () => {
  let component: TransactionRegisterFormComponent;
  let fixture: ComponentFixture<TransactionRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
