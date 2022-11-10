import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Step } from '../modals/step';
import { StepData } from '../modals/stepData';

@Injectable({
  providedIn: 'root',
})
export class WizardService {
  constructor() {}
  private listOfFormData = new Array<StepData>();
  wizardStepHandler = new Subject<string>();
  addOrUpdateStepData(step: StepData) {
    this.listOfFormData = this.listOfFormData.filter(
      (d) => d.stepId != step.stepId
    );
    this.listOfFormData.push(step);
  }
  getStepData(stepId: string) {
    let data = this.listOfFormData.find((d) => d.stepId == stepId);
    return new StepData(stepId, data?.data ?? []);
  }
}
