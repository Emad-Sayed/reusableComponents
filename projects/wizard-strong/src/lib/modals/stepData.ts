import { Form } from './form';
import { FormControl } from './formControl';

export class StepData {
  stepId: string;
  data: FormControl[];
  constructor(stepId: string, data: FormControl[]) {
    this.stepId = stepId;
    this.data = data;
  }
}
