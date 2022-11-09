import { ActiveState } from '../interfaces/activeState';
import { Form } from './form';
import { Step } from './step';

export class Wizard {
  steps: Array<Step> = new Array();
  constructor(steps: Array<Step>) {
    this.steps = steps;
  }
}
