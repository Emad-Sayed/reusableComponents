import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { WizardComponent } from './componenets/wizard/wizard.component';
import { WizardTextComponent } from './componenets/wizard-text/wizard-text.component';
import { WizardNumberComponent } from './componenets/wizard-number/wizard-number.component';
import { TestWizardComponent } from './componenets/test-wizard/test-wizard.component';
import { WizardRadioButtonComponent } from './componenets/wizard-radio-button/wizard-radio-button.component';
import { HttpClientModule } from '@angular/common/http';
import { WizardDropDownComponent } from './componenets/wizard-drop-down/wizard-drop-down.component';
import { WizardQueryService } from './services/wizardQueryService';

@NgModule({
  declarations: [
    WizardComponent,
    WizardTextComponent,
    WizardNumberComponent,
    TestWizardComponent,
    WizardRadioButtonComponent,
    WizardDropDownComponent,
  ],
  imports: [
    CommonModule,
    WizardRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [WizardQueryService],
})
export class WizardModule {}
