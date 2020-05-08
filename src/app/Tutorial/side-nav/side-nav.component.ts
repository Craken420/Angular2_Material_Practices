import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  opened = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  log(state){
    console.log(state)
  }
}
