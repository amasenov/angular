import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showUserMenu: Boolean = false;
  showModal: Boolean = false;
  modalStyle: String = 'none';

  constructor() { }
  
  openModal(){
    if(this.showModal){
      this.showModal = false;
      this.modalStyle = 'none';
    } else{
      this.showModal = true;
      this.modalStyle = 'block';
    }
  }

  ngOnInit() {
  }


}
