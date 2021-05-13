import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any = [];
  private url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { 
   
    http.get(this.url)
    .subscribe(response => {
      console.log(response);
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value}
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        this.posts.splice(0,0, post)
        console.log(response)
      });
  }

  updatePost(post: any) {
    this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
    .subscribe(response => {
      console.log(response)
    })
  }

  deletePost(post:any) {
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1)
    })
  }

  ngOnInit(): void {
  }

}
