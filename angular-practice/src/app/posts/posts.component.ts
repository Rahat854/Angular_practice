import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent{
  private url = 'https://jsonplaceholder.typicode.com/posts'
  posts:any = []
  constructor(private http:HttpClient) {
    this.http.get(this.url)
      .subscribe(res=>{
        console.log(res);
      })
  }
}
