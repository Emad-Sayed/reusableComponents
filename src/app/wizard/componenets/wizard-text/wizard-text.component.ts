import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-wizard-text',
  templateUrl: './wizard-text.component.html',
  styleUrls: ['./wizard-text.component.css'],
})
export class WizardTextComponent implements OnInit {
  @Input() index:number
  @Input() label:string
  form: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
     this.form =this.rootFormGroup.control.get("wizardControls") as FormGroup
  }
}
