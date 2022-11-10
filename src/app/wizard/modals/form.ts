import { FormControl } from './formControl';

export class Form {
  formControls: Array<FormControl> = new Array();
  constructor(formControls: Array<FormControl>) {
    this.formControls = formControls;
  }
}
