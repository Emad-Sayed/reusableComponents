export class FormControlMetaData {
  lookupDataURL: string;
  lookupDataToSelect: string[];
  validator: string;
  errorMessageAR: string;
  errorMessageEN: string;
  css: string;
  constructor(
    validator: string,
    css: string,
    errorMessageAR: string,
    errorMessageEN: string,
    lookupDataURL: string = '',
    lookupDataToSelect: string[] = []
  ) {
    this.validator = validator;
    this.css = css;
    this.lookupDataURL = lookupDataURL;
    this.lookupDataToSelect = lookupDataToSelect;
    this.errorMessageAR=errorMessageAR;
    this.errorMessageEN=errorMessageEN;
  }
}
