export class formControlMetaData {
  lookupDataURL: string;
  validator: string;
  css: string;
  constructor(validator: string, css: string, lookupDataURL: string = '') {
      this.validator = validator;
      this.css = css;
      this.lookupDataURL = lookupDataURL;
  }
}
