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
  providers:[WizardService]
})
export class WizardComponent implements OnInit {
  @Input() steps: Step[];
  currentActiveStep: Step;
  stepForm: FormGroup;
  stepSubmitted: boolean;
  dataSubmitted: any;
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
    this.wizardService.getStepNotifier().subscribe((stepId) => {
      this.setActiveStep(stepId);
    });
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
            [Validators.required,Validators.pattern(control?.formControlMetaData?.validator)],
          ],
          errorMessageAR: [
            control?.formControlMetaData?.errorMessageAR ?? '',
            [],
          ],
          errorMessageEN: [
            control?.formControlMetaData.errorMessageEN ?? '',
            [],
          ],
          lookupDataToSelect: [
            control?.formControlMetaData?.lookupDataToSelect ?? '',
            [],
          ]
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
  setActiveStep(stepId: string) {
    this.currentActiveStep =
      this.steps.find(
        (s) => s.stepId == stepId
      ) ?? this.steps[0];
    this.buildStepForm(this.wizardService.getStepData(this.currentActiveStep?.stepId));
  }
  onNext() {
    this.stepSubmitted = true;
    if (this.stepForm.valid) {
      this.wizardService.addOrUpdateStepData(
        new StepData(
          this.currentActiveStep.stepId,
          this.stepForm.value['wizardControls']
        )
      );
      this.setActiveStep(this.currentActiveStep.nextStepId);
    }
  }
  onPrevious() {
    this.setActiveStep(this.currentActiveStep.previousStepId);
  }
  submit() {
    this.stepSubmitted = true;
    if (this.stepForm.valid) {
      this.wizardService.addOrUpdateStepData(
        new StepData(
          this.currentActiveStep.stepId,
          this.stepForm.value['wizardControls']
        )
      );
      this.dataSubmitted = JSON.stringify(
        this.wizardService.getAllStepsDataAndClear()
      );
      setTimeout(() => {
        this.dataSubmitted = '';
        this.wizardService.goToStep('s1');
      }, 3000);
    }
  }
}
