import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbg:any;
  
  @Input() nomeUsuario: string = ""; 
  @HostListener('document:scroll') scrollover(){
    console.log(document.body.scrollTop, 'scrolllength#')

    if(document.body.scrollTop > 0  || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': 'black'
      }
    } else {
      this.navbg = {

      }
    }
  }
}