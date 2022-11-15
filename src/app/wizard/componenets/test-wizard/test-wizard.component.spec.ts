import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestWizardComponent } from './test-wizard.component';

describe('TestWizardComponent', () => {
  let component: TestWizardComponent;
  let fixture: ComponentFixture<TestWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
