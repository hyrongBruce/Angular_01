import { Component, OnInit } from '@angular/core';
import {CRUDService} from './crud.service';
import { Post } from './post.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {
  posts: any = [];

  constructor(public CRUDService: CRUDService ) {}

  ngOnInit(): void {
    this.CRUDService.getPosts().subscribe(res=>{
      // console.log(res);
      this.posts = res;
    });
  }

  delete(id){
    this.CRUDService.delete(id).subscribe(
      res=>{
        console.log('deleteSuccess, with id ='+id);
      }
    );
  }
  update(id){
    this.CRUDService.update(id,{'userID': 1,
      'id': 1,
      'title':'update',
      'body':'string'}).subscribe(
      res=>{
        console.log('updateSuccess,with id=' +id);
      }
    )
  }
  add(){
    this.CRUDService.add({'userID': 1,
      'id': 1,
      'title':'add',
      'body':'string'}).subscribe(
      res=>{
        console.log('addSuccess,with this dummy api');
      }
    )
  }

}
