import { Component, OnInit } from '@angular/core';
import {CRUDService} from './crud.service';
import { Post } from './post.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {
  posts: Post[] = [];

  constructor(public CRUD: CRUDService ) {}

  ngOnInit(): void {
    this.CRUD.getPosts();
  }

}
