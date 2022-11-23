import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStrongComponent } from './wizard-strong.component';

describe('WizardStrongComponent', () => {
  let component: WizardStrongComponent;
  let fixture: ComponentFixture<WizardStrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardStrongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardStrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
