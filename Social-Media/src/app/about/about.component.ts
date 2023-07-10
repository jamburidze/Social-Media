import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  arve(){
    let test = document.getElementById("devsLinkedIn") as HTMLElement;
    test.innerHTML = "https://www.linkedin.com/in/arve31/";
    let test1 = document.getElementById("devsGitHub") as HTMLElement;
    test1.innerHTML = "https://github.com/arve31";
    let test2 = document.getElementById("DevsNetClub") as HTMLElement;
    test2.innerHTML = "Giorgi Arveladze";
    let test3 = document.getElementById("descrip") as HTMLElement;
    test3.innerHTML = "giorgi ";
  }

  toko(){
    let link = document.getElementById("devsLinkedIn") as HTMLElement;
    link.innerHTML = ""
    let test2 = document.getElementById("DevsNetClub") as HTMLElement;
    test2.innerHTML = "Tornike Eloshvili";
    let test3 = document.getElementById("descrip") as HTMLElement;
    test3.innerHTML = "toko ";
}

}
