import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardComponent } from './wizard/componenets/wizard/wizard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WizardTextComponent } from './wizard/componenets/wizard-text/wizard-text.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardTextComponent,
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
