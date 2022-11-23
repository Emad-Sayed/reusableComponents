import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardRadioButtonComponent } from './wizard-radio-button.component';

describe('WizardRadioButtonComponent', () => {
  let component: WizardRadioButtonComponent;
  let fixture: ComponentFixture<WizardRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardRadioButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
