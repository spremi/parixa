import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'sp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  /**
   * Name of current theme.
   */
  private curTheme: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private overlay: OverlayContainer,
    private themeSvc: ThemeService
  ) { }

  ngOnInit() {
    this.sub = this.themeSvc.get().subscribe((theme) => {
      if (theme && theme.name !== this.curTheme) {

        const rootElem = this.elRef.nativeElement;
        const overlayElem = this.overlay.getContainerElement();

        // Remove current theme.
        this.renderer.removeClass(rootElem, this.curTheme);
        this.renderer.removeClass(overlayElem, this.curTheme);

        // Set new theme.
        this.curTheme = theme.name;
        this.renderer.addClass(rootElem, this.curTheme);
        this.renderer.addClass(overlayElem, this.curTheme);
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
