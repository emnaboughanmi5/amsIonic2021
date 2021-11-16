import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  urlProviders = 'https://amsjwt.herokuapp.com/providers';

  provider: any;

  constructor(private Http: HttpClient) { }
  listProviders() {
    return this.Http.get(this.urlProviders + '/list');
  }
}
