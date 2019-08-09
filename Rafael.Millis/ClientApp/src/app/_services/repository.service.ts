import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RepositSearch } from '../_interfaces/RepositSearch';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  search(txtSearch: string){
    return this.http.get<RepositSearch[]>(environment.api_url + '/api/reposit/search/' + txtSearch);
  }

  addToBookmark(item: RepositSearch){
    this.http.post(environment.api_url + '/api/reposit/AddToBookmark', item, this.httpOptions).subscribe(result => {
    });
  }

  getBookmarks(){
    return this.http.get<RepositSearch[]>(environment.api_url + '/api/reposit/getbookmarks');
  }
}
