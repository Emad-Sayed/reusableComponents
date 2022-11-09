import { Subject } from 'rxjs';
import { Step } from '../modals/step';
import { StepData } from '../modals/stepData';

export class WizardService {
  constructor() {}
  private listOfFormData = new Array<StepData>();
  private currentActiveStep: Step;
  wizardStepHandler = new Subject<string>();
  setActiveFormData(step: Step) {
    this.currentActiveStep = step;
  }
  addOrUpdateStepData(step: StepData) {
    this.listOfFormData = this.listOfFormData.filter(
      (d) => d.stepId == step.stepId
    );
    this.listOfFormData.push(step);
  }
  nextStep(){
    this.wizardStepHandler.next(this.currentActiveStep.nextStepId);
  }
  previousStep(){
    this.wizardStepHandler.next(this.currentActiveStep.previousStepId);
  }
}
