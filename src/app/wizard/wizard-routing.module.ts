import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestWizardComponent } from './componenets/test-wizard/test-wizard.component';

const routes: Routes = [{ path: '', component: TestWizardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WizardRoutingModule {}
