import { Component, Input, OnInit } from '@angular/core';
import { ThemeData } from 'src/app/models/theme-data';

@Component({
  selector: 'sp-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.sass'],
})
export class OptionComponent implements OnInit {
  @Input() data: ThemeData;

  constructor() { }

  ngOnInit() {
  }
}
