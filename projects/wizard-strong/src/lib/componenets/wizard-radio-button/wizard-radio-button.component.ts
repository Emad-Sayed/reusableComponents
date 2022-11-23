import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-wizard-radio-button',
  templateUrl: './wizard-radio-button.component.html',
  styleUrls: ['./wizard-radio-button.component.css']
})
export class WizardRadioButtonComponent implements OnInit {

  @Input() index:number
  @Input() label:string
  @Input() elementId:string
  @Input() lookupDataToSelect:string[]
  form: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
     this.form =this.rootFormGroup.control.get("wizardControls") as FormGroup
  }
}
