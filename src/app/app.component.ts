import { Component } from '@angular/core';
import { FormControlType } from './wizard/enums/formControlType';
import { Form } from './wizard/modals/form';
import { FormControl } from './wizard/modals/formControl';
import { FormControlMetaData } from './wizard/modals/formControlMetaData';
import { Step } from './wizard/modals/step';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reusableComponents';
  stepOneForm = new Form([{label:"الاسم",formControlType:FormControlType.Text,formControlMetaData:new FormControlMetaData("","","مطلوب","Required"),answer:""},
  {label:"العمر",formControlType:FormControlType.Number,formControlMetaData:new FormControlMetaData("","","مطلوب","Required"),answer:""}])
  stepTwoForm = new Form([{label:"رقم الهوية",formControlType:FormControlType.Text,formControlMetaData:new FormControlMetaData("","","مطلوب","Required"),answer:""},
  {label:"رقم جواز السفر",formControlType:FormControlType.Number,formControlMetaData:new FormControlMetaData("","","مطلوب","Required"),answer:""}])
  stepThreeForm = new Form([{label:"الايميل",formControlType:FormControlType.Text,formControlMetaData:new FormControlMetaData("","","مطلوب","Required"),answer:""},
  {label:"رقم الجوال",formControlType:FormControlType.Number,formControlMetaData:new FormControlMetaData("","","مطلوب","Required"),answer:""}])
  steps: Array<Step> = [
    { stepId: '1',stepName:"معلومات شخصية", nextStepId: '2', previousStepId: '-1', form: this.stepOneForm },
    { stepId: '2',stepName:"معلومات الهوية", nextStepId: '3', previousStepId: '1', form: this.stepTwoForm },
    { stepId: '3',stepName:"معلومات التواصل", nextStepId: '-1', previousStepId: '2', form: this.stepThreeForm },
  ];
}
