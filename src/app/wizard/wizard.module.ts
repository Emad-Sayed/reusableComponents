import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WizardComponent } from './componenets/wizard/wizard.component';
import { WizardTextComponent } from './componenets/wizard-text/wizard-text.component';
import { WizardNumberComponent } from './componenets/wizard-number/wizard-number.component';
import { TestWizardComponent } from './componenets/test-wizard/test-wizard.component';


@NgModule({
  declarations: [
    WizardComponent,
    WizardTextComponent,
    WizardNumberComponent,
    TestWizardComponent,
  ],
  imports: [
    CommonModule,
    WizardRoutingModule,
    ReactiveFormsModule
  ]
})
export class WizardModule { }
