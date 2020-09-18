import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})

/**lets change this componet into a CLock:
 * src : https://stackoverflow.com/questions/54289078/display-time-clock-in-angular
 */
export class FirstComponentComponent implements OnInit {
  name = "first time using Angular";
  // this is for Day2 Clock;
  
  time = new Date();
  utc = this.time.getTime()+(this.time.getTimezoneOffset() * 60000);
  newDate = new Date(this.utc + (3600000 * 1))

  timer;
  constructor() { }

  // var utc = today.getTime() + (today.getTimezoneOffset() * 60000);
  //   var newDate = new Date(utc + (3600000 * 1)); this 1 means time zone
  ngOnInit(): void {
   
    this.timer = setInterval(() => {
      this.newDate = new Date();
    }, 1000);
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }
}
