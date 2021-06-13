import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
 post:Post
  constructor() { }

  ngOnInit(): void {
  }

}
