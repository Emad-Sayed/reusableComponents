import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WizardQueryService {
  constructor(private http: HttpClient) {}
  getQueryData(query: string) {
    return this.http.get(query);
  }
}
