import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { WizardQueryService } from '../../services/wizardQueryService';

@Component({
  selector: 'app-wizard-drop-down',
  templateUrl: './wizard-drop-down.component.html',
  styleUrls: ['./wizard-drop-down.component.css'],
})
export class WizardDropDownComponent implements OnInit {
  @Input() index: number;
  @Input() label: string;
  @Input() elementId: string;
  @Input() query: string;
  form: FormGroup;
  lookupDataToSelect: any;
  constructor(
    private wizardQueryService: WizardQueryService,
    private rootFormGroup: FormGroupDirective
  ) {}

  ngOnInit(): void {
    this.wizardQueryService.getQueryData(this.query).subscribe((data) => {
      this.lookupDataToSelect = data;
    });
    this.form = this.rootFormGroup.control.get('wizardControls') as FormGroup;
  }
}
