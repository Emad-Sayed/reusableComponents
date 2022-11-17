import { Component, OnInit } from '@angular/core';
import { FormControlType } from '../../enums/formControlType';
import { Form } from '../../modals/form';
import { FormControlMetaData } from '../../modals/formControlMetaData';
import { Step } from '../../modals/step';

@Component({
  selector: 'app-test-wizard',
  templateUrl: './test-wizard.component.html',
  styleUrls: ['./test-wizard.component.css'],
})
export class TestWizardComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'reusableComponents';
  stepOneForm = new Form('fs1', [
    {
      elementId: 'fs1c1',
      label: 'الاسم',
      formControlType: FormControlType.Text,
      formControlMetaData: new FormControlMetaData('[a-zA-Z ]+', '', 'هذا الحقل مطلوب و يحتوي على حروف فقط', 'Letters Only'),
      answer: '',
    },
    {
      elementId: 'fs1c2',
      label: 'العمر',
      formControlType: FormControlType.Number,
      formControlMetaData: new FormControlMetaData('[0-9]+', '', 'هذا الحقل مطلوب و يحتوي على ارقام فقط', 'Number Only'),
      answer: '',
    },
    {
      elementId: 'fs1c3',
      label: 'النوع',
      formControlType: FormControlType.RadioButton,
      formControlMetaData: new FormControlMetaData('', '', 'النوع مطلوب', 'Required','',["رجل","انثي"]),
      answer: '',
    },
    {
      elementId: 'fs1c4',
      label: 'الجنسية',
      formControlType: FormControlType.NormalDropDownList,
      formControlMetaData: new FormControlMetaData('', '', 'الجنسية مطلوب', 'Required','assets/dropDownListData.json'),
      answer: '',
    },
  ]);
  stepTwoForm = new Form('fs2', [
    {
      elementId: 'fs2c1',
      label: 'رقم الهوية',
      formControlType: FormControlType.Text,
      formControlMetaData: new FormControlMetaData('', '', 'هذا الحقل مطلوب', 'Required'),
      answer: '',
    },
    {
      elementId: 'fs2c2',
      label: 'رقم جواز السفر',
      formControlType: FormControlType.Number,
      formControlMetaData: new FormControlMetaData('', '', 'هذا الحقل مطلوب', 'Required'),
      answer: '',
    },
  ]);
  stepThreeForm = new Form('fs3', [
    {
      elementId: 'fs3c1',
      label: 'الايميل',
      formControlType: FormControlType.Text,
      formControlMetaData: new FormControlMetaData('', '', 'هذا الحقل مطلوب', 'Required'),
      answer: '',
    },
    {
      elementId: 'fs3c2',
      label: 'رقم الجوال',
      formControlType: FormControlType.Number,
      formControlMetaData: new FormControlMetaData('', '', 'هذا الحقل مطلوب', 'Required'),
      answer: '',
    },
  ]);
  steps: Step[] = [
    {
      elementId: 's1',
      stepId: '1',
      stepName: 'معلومات شخصية',
      nextStepId: '2',
      previousStepId: '-1',
      form: this.stepOneForm,
    },
    {
      elementId: 's2',
      stepId: '2',
      stepName: 'معلومات الهوية',
      nextStepId: '3',
      previousStepId: '1',
      form: this.stepTwoForm,
    },
    {
      elementId: 's3',
      stepId: '3',
      stepName: 'معلومات التواصل',
      nextStepId: '-1',
      previousStepId: '2',
      form: this.stepThreeForm,
    },
  ];
}
