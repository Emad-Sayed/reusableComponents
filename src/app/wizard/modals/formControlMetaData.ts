export class FormControlMetaData {
  lookupDataURL: string;
  validator: string;
  errorMessageAR: string;
  errorMessageEN: string;
  css: string;
  constructor(
    validator: string,
    css: string,
    errorMessageAR: string,
    errorMessageEN: string,
    lookupDataURL: string = ''
  ) {
    this.validator = validator;
    this.css = css;
    this.lookupDataURL = lookupDataURL;
    this.errorMessageAR=errorMessageAR;
    this.errorMessageEN=errorMessageEN;
  }
}
