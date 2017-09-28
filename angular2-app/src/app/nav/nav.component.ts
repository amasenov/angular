import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showUserMenu: Boolean = false;
  showModal: Boolean = false;
  loginModal: Boolean = false;
  registerModal: Boolean = false;

  constructor() { }

  onOpenModal(modalType) {
    if (this.showModal) {
      this.loginModal = false;
      this.registerModal = false;
      this.showModal = false;
    } else {
      if (modalType === 'login') {
        this.loginModal = true;
      } else if (modalType === 'register') {
        this.registerModal = true;
      }
      this.showModal = true;
    }
  }

  ngOnInit() {
  }


}
