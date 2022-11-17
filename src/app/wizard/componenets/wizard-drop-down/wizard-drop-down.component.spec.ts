import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardDropDownComponent } from './wizard-drop-down.component';

describe('WizardDropDownComponent', () => {
  let component: WizardDropDownComponent;
  let fixture: ComponentFixture<WizardDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
