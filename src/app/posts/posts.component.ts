import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  constructor(http: HttpClient) { 
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      console.log(response);
    });
  }

  ngOnInit(): void {
  }

}
