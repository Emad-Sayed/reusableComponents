import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-wizard-number',
  templateUrl: './wizard-number.component.html',
  styleUrls: ['./wizard-number.component.css']
})
export class WizardNumberComponent implements OnInit {

  @Input() index:number
  @Input() label:string
  form: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
     this.form =this.rootFormGroup.control.get("wizardControls") as FormGroup
  }
}
