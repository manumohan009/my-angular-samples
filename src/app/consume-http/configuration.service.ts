import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  public server = 'http://localhost:5000/';
  public apiUrl = 'api/';
  public serverWithApiUrl = this.server + this.apiUrl;

  constructor() { }
}
