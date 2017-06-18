import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showUserMenu: Boolean = false;
  showModal: Boolean = false;

  constructor() { }
  
  openModal(){
    if(this.showModal){
      this.showModal = false;
    } else{
      this.showModal = true;
    }
  }

  ngOnInit() {
  }


}
