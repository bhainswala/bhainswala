import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {
  public phone = "919093370706"
  public title = "Hey User Welcome to Bhainswala";
  constructor() { }

  ngOnInit(): void {
  }

}
