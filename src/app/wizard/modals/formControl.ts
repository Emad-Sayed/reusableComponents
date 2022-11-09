import { FormControlType } from '../enums/formControlType';
import { formControlMetaData } from './formControlMetaData';

export class FormControl {
  formControlType: FormControlType;
  formControlMetaData: Array<formControlMetaData> = new Array();
  constructor(formControlType :FormControlType,formControlValidators:Array<formControlMetaData>){
    this.formControlType = formControlType;
    this.formControlMetaData = formControlValidators;
  }
}
