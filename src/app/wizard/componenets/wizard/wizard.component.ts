import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '../../modals/formControl';
import { Step } from '../../modals/step';
import { StepData } from '../../modals/stepData';
import { WizardService } from '../../services/wizardService';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent implements OnInit {
  @Input() steps: Array<Step>;
  currentActiveStep: Step;
  stepForm: FormGroup;
  stepSubmitted: boolean;
  get getOrderedSteps() {
    return this.steps.reverse();
  }
  constructor(
    private wizardService: WizardService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.currentActiveStep = this.steps[0];
    this.initiForm();
    this.buildStepForm();
  }
  initiForm() {
    this.stepForm = this.formBuilder.group({
      wizardControls: this.formBuilder.array([]),
    });
  }
  buildStepForm(stepData: StepData = new StepData('', [])) {
    this.stepSubmitted = false;
    var wizardControls = this.getWizardControls();
    wizardControls.clear();
    this.currentActiveStep.form.formControls.forEach((control) => {
      wizardControls.push(
        this.formBuilder.group({
          label: [control.label],
          type: [control.formControlType],
          elementId: [control.elementId],
          answer: [
            stepData.stepId == ''
              ? ''
              : this.getCachedData(control.label, stepData?.data),
            Validators.required,
          ],
          errorMessageAR: [
            control?.formControlMetaData?.errorMessageAR ?? '',
            [],
          ],
          errorMessageEN: [
            control?.formControlMetaData.errorMessageEN ?? '',
            [],
          ],
        })
      );
    });
  }
  getCachedData(label: string, data: FormControl[]) {
    return data?.find((data) => data.label == label)?.answer ?? '';
  }
  getWizardControls(): FormArray {
    return this.stepForm.get('wizardControls') as FormArray;
  }
  onNext() {
    this.stepSubmitted = true;
    if (this.stepForm.valid) {
      this.wizardService.addOrUpdateStepData(
        new StepData(this.currentActiveStep.stepId, this.stepForm.value['wizardControls'])
      );
      this.currentActiveStep =
        this.steps.find((s) => s.stepId == this.currentActiveStep.nextStepId) ??
        this.steps[0];
      this.buildStepForm();
    }
  }
  onPrevious() {
    this.currentActiveStep =
      this.steps.find(
        (s) => s.stepId == this.currentActiveStep.previousStepId
      ) ?? this.steps[0];
    this.buildStepForm(
      this.wizardService.getStepData(this.currentActiveStep?.stepId)
    );
  }
}
