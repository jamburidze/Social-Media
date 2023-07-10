import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    input:any;
    ngOnInit():void{
      this.input = document.querySelector(".search-input")
    }
    showSearch(){
      if(this.input.style.display == "none"){
        this.input.style.display = "block";
      }else{
        this.input.style.display = "none"
      }
    }

}
