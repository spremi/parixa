import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeData } from 'src/app/models/theme-data';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'sp-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  /**
   * List of themes.
   */
  themes: ThemeData[] = [];

  constructor(private themeSvc: ThemeService) { }

  ngOnInit() {
    this.sub = this.themeSvc.list().subscribe((result) => {
      this.themes = result;
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
