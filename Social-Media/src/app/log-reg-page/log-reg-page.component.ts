import { Component } from '@angular/core';

@Component({
  selector: 'app-log-reg-page',
  templateUrl: './log-reg-page.component.html',
  styleUrls: ['./log-reg-page.component.scss']
})
export class LogRegPageComponent {
  showlog:any;
  showsign: any;
  recov:any;
  ngOnInit():void{
    this.showlog = document.querySelector(".login-form");
    this.showsign = document.querySelector(".signup-form");
    this.recov = document.querySelector(".recovery")
  }

  login(){
    this.showlog.style.display = "flex";
    this.showsign.style.display = "none";
    this.recov.style.display = "none";
  }
  signup(){
    this.showlog.style.display = "none";
    this.showsign.style.display = "flex";
    this.recov.style.display = "none";
  }
  password_rec(){
    this.showlog.style.display = "none";
    this.showsign.style.display = "none";
    this.recov.style.display = "flex";
  }
}