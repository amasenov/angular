import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  showAboutBody: Boolean = false;
  btnTitle: String = 'Show';
  constructor() {}

  onShowBody() {
    if (this.showAboutBody) {
      this.btnTitle = 'Hide';
    } else {
      this.btnTitle = 'Show';
    }
  }
  ngOnInit() {
  }

}
