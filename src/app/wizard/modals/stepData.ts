import { Form } from './form';

export class StepData {
  stepId: string;
  data: any;
  constructor(stepId: string, data: any) {
    this.stepId = stepId;
    this.data = data;
  }
}
