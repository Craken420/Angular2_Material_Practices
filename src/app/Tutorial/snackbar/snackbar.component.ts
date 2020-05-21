import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
})

export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message, action){
    this.snackbar.open(message, action);
  }

  openActionSnackBar(message, action){
                                                          // para que se quite despues de un tiempo
    let snackBarRef = this.snackbar.open(message, action, {duration: 2000} );

    snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snackbar was dismiss');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('The snackbar action was triggered!');  
    })
  }

  openCustonSnackBar(){
    this.snackbar.openFromComponent(CustomSnackbBarComponent, { duration: 2000 })
  }
}

@Component({
  selector: 'custom-snackbar',
  template: `<span style='color: orange'>Custom Sanackbar</span>`
})
export class CustomSnackbBarComponent {}
