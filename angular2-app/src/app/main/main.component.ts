import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showMain: Boolean = false;
  btnTxt: String = 'Learn more';

  constructor() { }

  ngOnInit() {
  }

  showMainBody() {
    this.showMain = !this.showMain;
    if (this.showMain === true) {
      this.btnTxt = 'Hide body';
    } else {
      this.btnTxt = 'Learn more';
    }
  }

}
