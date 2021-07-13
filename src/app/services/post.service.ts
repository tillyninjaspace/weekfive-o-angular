import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }
  getPost() {
    return this.http.get(this.url)

  


  }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post))

    .pipe(catchError(error => {
      if (error.status === 400) 
        return throwError(new BadInput(error.json()));
      
      return throwError(new AppError(error.json()));
    }))
    
  }

  updatePost(post: any) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}))
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/' + id)
    .pipe(catchError(error => {
      if (error.status === 404) 
        return throwError(new NotFoundError());

      return throwError(new AppError(error));
    })) 
  }
}

