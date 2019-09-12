import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

const dialogTpl = '<h1 mat-dialog-title>TITLE</h1>' +
  '<mat-dialog-content>' +
  '<p>Dialog Content 1</p>' +
  '<p>Dialog Content 2</p>' +
  '</mat-dialog-content>' +
  '<mat-dialog-actions>' +
  '<button mat-button mat-dialog-close>CLICK ME</button>' +
  '</mat-dialog-actions>';

@Component({
  selector: 'sp-sample-dialog',
  template: dialogTpl,
})
export class SampleDialogComponent {

  constructor() { }
}

@Component({
  selector: 'sp-kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.sass'],
})
export class KitchenSinkComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(SampleDialogComponent);
  }

  openSnackbar(): void {
    this.snackBar.open('Time for a snack!', 'GO', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
