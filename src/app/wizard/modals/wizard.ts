import { Subject } from 'rxjs';
import { ActiveState } from '../interfaces/activeState';
import { Form } from './form';
import { Step } from './step';
import { StepData } from './stepData';

export class Wizard {
  elementId:string;
  submitUrl: string;
  steps: Array<Step> = new Array();
  wizardNotifier: Subject<Array<StepData>>;
  constructor(
    elementId:string,
    submitUrl: string,
    wizardNotifier: Subject<Array<StepData>>,
    steps: Array<Step>
  ) {
    this.elementId=elementId;
    this.submitUrl = submitUrl;
    this.wizardNotifier = wizardNotifier;
    this.steps = steps;
  }
}
