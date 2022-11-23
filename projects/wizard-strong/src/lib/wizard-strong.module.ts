import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './componenets/wizard/wizard.component';
import { WizardTextComponent } from './componenets/wizard-text/wizard-text.component';
import { WizardNumberComponent } from './componenets/wizard-number/wizard-number.component';
import { WizardRadioButtonComponent } from './componenets/wizard-radio-button/wizard-radio-button.component';
import { WizardDropDownComponent } from './componenets/wizard-drop-down/wizard-drop-down.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WizardQueryService } from './services/wizardQueryService';

@NgModule({
  declarations: [
    WizardComponent,
    WizardTextComponent,
    WizardNumberComponent,
    WizardRadioButtonComponent,
    WizardDropDownComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [WizardComponent],
  providers: [WizardQueryService],
})
export class WizardStrongModule {}
