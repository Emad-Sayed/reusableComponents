import { FormControlType } from '../enums/formControlType';
import { FormControlMetaData } from './formControlMetaData';

export class FormControl {
  label: string;
  formControlType: FormControlType;
  formControlMetaData: FormControlMetaData;
  answer: string;
  constructor(
    label: string,
    formControlType: FormControlType,
    formControlMetaData: FormControlMetaData
  ) {
    this.label = label;
    this.formControlType = formControlType;
    this.formControlMetaData = formControlMetaData;
  }
}
