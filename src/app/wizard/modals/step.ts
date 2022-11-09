import { ActiveState } from '../interfaces/activeState';
import { Form } from './form';

export class Step {
  stepId: string;
  form: Form;
  nextStepId: string;
  previousStepId: string;
  constructor(
    stepId: string,
    form: Form,
    nextStepName: string,
    previousStepName: string
  ) {
    this.stepId = stepId;
    this.form = form;
    this.nextStepId = nextStepName;
    this.previousStepId = previousStepName;
  }
}
