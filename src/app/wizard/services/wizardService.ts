import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Step } from '../modals/step';
import { StepData } from '../modals/stepData';

@Injectable()
export class WizardService {
  private stepsData: StepData[] = [];
  private wizardStepHandler = new Subject<string>();
  constructor() {
    this.stepsData = [];
  }
  addOrUpdateStepData(step: StepData) {
    this.stepsData = this.stepsData.filter((d) => d.stepId != step.stepId);
    this.stepsData.push(step);
  }
  getStepData(stepId: string) {
    let data = this.stepsData.find((d) => d.stepId == stepId);
    return new StepData(stepId, data?.data ?? []);
  }
  getAllStepsDataAndClear() {
    let data = this.stepsData;
    this.stepsData = [];
    return data;
  }
  goToStep(stepId: string) {
    this.wizardStepHandler.next(stepId);
  }
  getStepNotifier(): Subject<string> {
    return this.wizardStepHandler;
  }
}
