import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  notifications = 2;
  notifications2 = 0;
}
