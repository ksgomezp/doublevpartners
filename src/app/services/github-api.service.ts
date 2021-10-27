import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http: HttpClient) { 
  }


  getUsers(val: string){
      return this.http.get(`https://api.github.com/search/users?q=${val}`);
  }

  getUser(val: string){
    return this.http.get(`https://api.github.com/users/${val}`);
}

}
