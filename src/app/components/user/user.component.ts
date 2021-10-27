import { Component } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { GithubApiService } from '../../services/github-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent  {
  
  user: any = {};

  constructor(private router: ActivatedRoute, private github: GithubApiService) {

     this.router.params.subscribe( params=>{
         this.getUser(params['id']);
     });
    }
     
    getUser(userLogin: string){

      this.github.getUser(userLogin)
      .subscribe( resp =>{
        this.user = resp;
      });
      
    }

}
