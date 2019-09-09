import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ThemeData } from 'src/app/models/theme-data';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'sp-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.sass'],
})
export class OptionComponent implements OnInit {
  @Input() data: ThemeData;

  constructor(private themeSvc: ThemeService) { }

  ngOnInit() {
  }

  @HostListener('click')
  onClick() {
    this.themeSvc.set(this.data);
  }
}
