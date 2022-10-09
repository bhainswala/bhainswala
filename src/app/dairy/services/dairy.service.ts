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
    let queryParam = new HttpParams();
    queryParam = queryParam.append("sold_status", "USD");
    if(type){
      queryParam = queryParam.append("cattle_type", type);
    }
    return this.http.get(this.baseUrl + '/dairyoperations/dairy/list/',{params:queryParam});
  }

  getCattleList(id:any){
    let params = new HttpParams().set('dairy_id',id);
    return this.http.get(this.baseUrl + '/dairyoperations/cattle/list/',{params:params});
  }
}
