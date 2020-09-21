import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})

/**lets change this componet into a CLock:
 * src : https://stackoverflow.com/questions/54289078/display-time-clock-in-angular
 */
export class ClockComponent implements OnInit {
 // this is for Day2 Clock;
  
 private date = new Date();
//  utc = this.time.getTime()+(this.time.getTimezoneOffset() * 60000);
//  newDate = new Date(this.utc + (3600000 * 1))
public daysArray =['Sun','Mon','Tuse','Wes','Thurs','Fri','Sat']
public day:any;
public hour :any;
public minute :any;
public second :any;
public amPm: string;
 timer;

  constructor() { }
 
  // sep.20th :next time try write as a function may be better
  // sep.21st: try write the onclick to stop the watch
  ngOnInit(): void {
    this.timer = setInterval(() => {
    this.updateDate(this.date);
    }, 1000);
  }

  updateDate(date:Date){
     date = new Date();
    this.day = this.daysArray[date.getDay()];// getDay() will return the index only
    let hourTemp = date.getUTCHours();
    this.hour = (hourTemp+1)%12;//GMT+1
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    this.amPm = this.hour>=12?'PM':'AM';
  }

 

  ngOnDestroy(){
    clearInterval(this.timer);
  }

}
