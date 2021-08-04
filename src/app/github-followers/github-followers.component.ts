import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../services/github-followers.service';


@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent{
  followers: any = [];

  constructor(private service: GithubFollowersService) { 

    this.service.getPost()
    .subscribe(response => {
      console.log(response);
      this.followers = response;
    });
  }

}
