import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/componenets/wizard/wizard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WizardTextComponent } from './wizard/componenets/wizard-text/wizard-text.component';
import { WizardNumberComponent } from './wizard/componenets/wizard-number/wizard-number.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardTextComponent,
    WizardNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
