import { FormControl } from './formControl';

export class Form {
  elementId: string;
  formControls: FormControl[] = [];

  constructor(elementId: string, formControls: FormControl[]) {
    this.elementId = elementId;
    this.formControls = formControls;
  }
}
