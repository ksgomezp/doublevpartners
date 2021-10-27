import { Component } from '@angular/core';
import { GithubApiService } from 'src/app/services/github-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})

export class HomeComponent {
  
  users: any[] = [];
  userLogins: any[] = [];
  followers: any[] = [];
  visability: boolean = false;

  constructor(private github: GithubApiService, private router: Router) { }

  search(val: string){
     this.github.getUsers( val)
         .subscribe( (resp: any) =>{
           this.users = resp.items;
           this.usersInfo(resp.items);
         });
  }
  
  seeUser(user: any){
      let userLogin = user.login;
      this.router.navigate(['/user', userLogin]); 
  }

  usersInfo(users: any){
    
    for (let i = 0; i < 10 ; i++) {
  
      this.github.getUser(users[i]['login'])
      .subscribe( (resp: any) =>{
        this.userLogins[i] = users[i]['login'];
        this.followers[i] = resp.followers;
      });
    }
  }

  showDivs(){
    this.visability = true;
  }

}
