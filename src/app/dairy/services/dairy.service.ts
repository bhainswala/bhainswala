import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DairyService {

  public baseUrl = environment.url;

  constructor(
    private http: HttpClient
  ) { }
  

  getDairyList(type?:any){
    let params
    if(type){
      params = new HttpParams().set('cattle_type',type);
    }
    return this.http.get(this.baseUrl + '/dairyoperations/dairy/list/',{params:params});
  }

  getCattleList(id:any){
    let params = new HttpParams().set('dairy_id',id);
    return this.http.get(this.baseUrl + '/dairyoperations/cattle/list/',{params:params});
  }
}
