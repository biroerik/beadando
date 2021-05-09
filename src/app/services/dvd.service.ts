import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dvd } from '../models/dvd';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  constructor(private http: HttpClient) { }

  async loadDvds() {
    return this.http.get<Dvd[]>('/api/dvds').toPromise();
  }

  async filterDvds(search: string) {
    return this.http.get<Dvd[]>('/api/dvds', {
      params: { search }
    }).toPromise();
  }

  async addDvd(dvd: Dvd) {
    return this.http.post<Dvd>('/api/dvds', dvd).toPromise();
  }

  async getDvdById(id: string) {
    return this.http.get<Dvd>('/api/dvds/' + id).toPromise();
  }
}
