import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardTextComponent } from './wizard-text.component';

describe('WizardTextComponent', () => {
  let component: WizardTextComponent;
  let fixture: ComponentFixture<WizardTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
