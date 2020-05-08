import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  notifications = 0;
  showSpinner = false;

  loadData() {
    this.showSpinner = true;
    setTimeout(() => { 
      this.showSpinner = false;
    }, 5000)
  }
}
