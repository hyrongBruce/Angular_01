import { Component, ViewChild } from '@angular/core';
import{FirstComponentComponent} from './first-component/first-component.component';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  name ="1st change on this";
  count: number = 0;
  emailAddress :string='';
  /**this is time and time Dif */
  RootTime = new Date() ;
  
  utc = this.RootTime.getTime()+(this.RootTime.getTimezoneOffset() * 60000);
  LondonTime = new Date(this.utc + (3600000 * 1));


  RootTimer;

  constructor(){}
  buttonHoverd() : void{
    this.count = this.count+1;
    console.log("button hoverd");
  }
  // @ViewChild get all child stuff(fisrtComponentComponent);
  // @ViewChild(FirstComponentComponent) child: FirstComponentComponent;
  
  ngOnInit():void{
     
    this.RootTimer=setInterval(() => {
      this.RootTime = new Date();
      this.LondonTime= new Date(this.utc + (3600000 * 1));
     
    }, 1000);
   
  }
  ngOnDestroy(){
    clearInterval(this.RootTimer);
  }
  
}
