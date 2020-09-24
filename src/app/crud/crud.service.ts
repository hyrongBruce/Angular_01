import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
// what is map?
import { map } from "rxjs/operators";
import { Subject } from 'rxjs';
@Injectable({ providedIn: "root" })
export class CRUDService{
    // private posts: Post[] = [];
    public url :string = "https://jsonplaceholder.typicode.com/posts";

    // private postsUpdated = new Subject<{ posts: Post[]; postCount: number }>();
    // init service
    constructor(private http: HttpClient){}
/**  old version -- doesn't work 
    getPosts(){
//         this.posts = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))

        // return this.http.get(this.url);

        this.http
        .get<{ message: string; posts: any; maxPosts: number }>(this.url)
        //why use pipe here
        .pipe(
            // what is the map for? format data?
            map(postData => {
                return {
                  posts: postData.posts.map(post => {
                    return {
                    //   title: post.title,
                    //   content: post.content,
                    //   id: post._id,
                    //   imagePath: post.imagePath,
                    //   creator: post.creator
                    userID:post.completed,
                    ID:post.completed,
                    title:post.title,
                    completed:post.completed
                    };
                  }),
                  maxPosts: postData.maxPosts
                };
              })
        )
        //actually no need to subscribe here cause it is dummy data, wont change
        // .subscribe(
        //     transformedPostData => {
        //         this.posts = transformedPostData.posts;
        //         this.postsUpdated.next({
        //           posts: [...this.posts],
        //           postCount: transformedPostData.maxPosts
        //         });
        //       });
    }
    */

    // these code are from lecture which I saw on 9.23 
    getPosts(){
      return this.http.get(this.url);
    }
    delete(id){
      return this.http.delete(this.url+'/'+id);
    }
    update(id,post){
      return this.http.put(this.url+'/'+id,post);
    }
    add(post){
      return this.http.post(this.url+'/',post);
    }

} 