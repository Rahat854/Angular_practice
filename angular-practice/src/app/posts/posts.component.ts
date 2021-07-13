import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent{
  title = 'Posts'
  posts:any = []
  constructor(private http:HttpClient) {
  }
  getData() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    this.http.get(url).subscribe((res) => {
      this.posts = res
      console.log(this.posts)
    })
  }
}
