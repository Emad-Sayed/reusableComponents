import { FormControl } from './formControl';

export class Form {
  elementId:string
  formControls: Array<FormControl> = new Array();

  constructor(elementId:string,formControls: Array<FormControl>) {
    this.elementId=elementId;
    this.formControls = formControls;
  }
}
