import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardNumberComponent } from './wizard-number.component';

describe('WizardNumberComponent', () => {
  let component: WizardNumberComponent;
  let fixture: ComponentFixture<WizardNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
