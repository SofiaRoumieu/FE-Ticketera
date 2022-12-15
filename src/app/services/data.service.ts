import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient: HttpClient) { }

  //GET
  getData(url: any){
    return this.httpClient.get(url);
  }
  //POST
  postData(url: any){
    return this.httpClient.post(url, null);
  }
  //PUT
  putData(url: any){
    return this.httpClient.put(url, null);
  }
  //DELETE
  deleteData(url: any){
    return this.httpClient.delete(url);
  }
}
