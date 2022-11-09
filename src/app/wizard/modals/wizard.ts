import { Subject } from 'rxjs';
import { ActiveState } from '../interfaces/activeState';
import { Form } from './form';
import { Step } from './step';
import { StepData } from './stepData';

export class Wizard {
  steps: Array<Step> = new Array();
  wizardNotifier: Subject<Array<StepData>>;
  constructor(wizardNotifier: Subject<Array<StepData>>, steps: Array<Step>) {
    this.wizardNotifier = wizardNotifier;
    this.steps = steps;
  }
}
