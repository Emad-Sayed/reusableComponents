import { Form } from './form';

export class Step {
  stepId: string;
  stepName:string;
  form: Form;
  nextStepId: string;
  previousStepId: string;
  constructor(
    stepId: string,
    stepName:string,
    form: Form,
    nextStepName: string,
    previousStepName: string
  ) {
    this.stepId = stepId;
    this.stepName = stepName;
    this.form = form;
    this.nextStepId = nextStepName;
    this.previousStepId = previousStepName;
  }
}
