import { FormControlType } from '../enums/formControlType';
import { FormControlMetaData } from './formControlMetaData';

export class FormControl {
  elementId: string;
  label: string;
  formControlType: FormControlType;
  formControlMetaData: FormControlMetaData;
  answer: string;
  constructor(
    elementId: string,
    label: string,
    formControlType: FormControlType,
    formControlMetaData: FormControlMetaData
  ) {
    this.elementId = elementId;
    this.label = label;
    this.formControlType = formControlType;
    this.formControlMetaData = formControlMetaData;
  }
}
