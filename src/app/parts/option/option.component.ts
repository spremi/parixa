import {
  AfterViewInit, Component, ElementRef, HostListener,
  Input, OnDestroy, Renderer2, ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeData } from 'src/app/models/theme-data';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'sp-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.sass'],
})
export class OptionComponent implements AfterViewInit, OnDestroy {
  private sub: Subscription;

  @Input() data: ThemeData;

  @ViewChild('primary', { static: false })
  boxPrimary: ElementRef<HTMLSpanElement>;

  @ViewChild('accent', { static: false })
  boxAccent: ElementRef<HTMLSpanElement>;

  @ViewChild('warn', { static: false })
  boxWarn: ElementRef<HTMLSpanElement>;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private themeSvc: ThemeService
  ) { }

  ngAfterViewInit() {
    if (!this.data) {
      return;
    }

    this.sub = this.themeSvc.get().subscribe((theme) => {
      if (theme && theme.name === this.data.name) {
        this.renderer.addClass(this.elRef.nativeElement, 'selected');
      } else {
        this.renderer.removeClass(this.elRef.nativeElement, 'selected');
      }
    });

    if (this.data.primary && this.boxPrimary) {
      this.renderer.setStyle(
        this.boxPrimary.nativeElement,
        'background-color',
        this.data.primary);
    }

    if (this.data.accent && this.boxAccent) {
      this.renderer.setStyle(
        this.boxAccent.nativeElement,
        'background-color',
        this.data.accent);
    }

    if (this.data.warn && this.boxWarn) {
      this.renderer.setStyle(
        this.boxWarn.nativeElement,
        'background-color',
        this.data.warn);
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  @HostListener('click')
  onClick() {
    this.themeSvc.set(this.data);
  }
}
