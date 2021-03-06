// import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any = [];
  

  constructor(private service: PostService) { 
    // ngOnInit() {
    this.service.getPost()
    .subscribe(response => {
      console.log(response);
      this.posts = response;
    // },
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {title: input.value};
    this.posts.splice(0,0, post);
    
    input.value = '';

    this.service.createPost(post)
    .subscribe(newPost => {
      console.log(newPost)
      // post['id'] = newPost.id;
    }, (error: AppError) => {
      this.posts.splice(0, 1);

      if (error instanceof BadInput) {
        // this.form.setErrors(error.originalError);
      }
      else throw error;
      
    });
  }

  updatePost(post: any) {
    this.service.updatePost(post)
    .subscribe(response => {
      console.log(response)
    });
  }

  deletePost(post: any) {
    this.service.deletePost(10890)
    .subscribe(
      response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1)
    }, 
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post has already been deleted.');
          else throw error;
    })
  }

}
