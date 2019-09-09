import {
  AfterViewInit, Component, ElementRef, HostListener, Input, Renderer2, ViewChild
} from '@angular/core';
import { ThemeData } from 'src/app/models/theme-data';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'sp-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.sass'],
})
export class OptionComponent implements AfterViewInit {
  @Input() data: ThemeData;

  @ViewChild('primary', { static: false })
  boxPrimary: ElementRef<HTMLSpanElement>;

  @ViewChild('accent', { static: false })
  boxAccent: ElementRef<HTMLSpanElement>;

  @ViewChild('warn', { static: false })
  boxWarn: ElementRef<HTMLSpanElement>;

  constructor(
    private renderer: Renderer2,
    private themeSvc: ThemeService
  ) { }

  ngAfterViewInit() {
    if (!this.data) {
      return;
    }

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

  @HostListener('click')
  onClick() {
    this.themeSvc.set(this.data);
  }
}
