import { Form } from './form';

export class Step {
  elementId:string
  stepId: string;
  stepName:string;
  form: Form;
  nextStepId: string;
  previousStepId: string;
  constructor(
    elementId:string,
    stepId: string,
    stepName:string,
    form: Form,
    nextStepName: string,
    previousStepName: string
  ) {
    this.elementId=elementId;
    this.stepId = stepId;
    this.stepName = stepName;
    this.form = form;
    this.nextStepId = nextStepName;
    this.previousStepId = previousStepName;
  }
}
