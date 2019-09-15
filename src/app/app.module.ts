import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SvgIconModule } from '@spremi/svg-icon';

import { AppComponent } from './app.component';
import { StockModule } from './modules/stock/stock.module';
import { InfoComponent } from './parts/info/info.component';
import { MenuComponent } from './parts/menu/menu.component';
import { OptionComponent } from './parts/option/option.component';
import { PilotComponent } from './parts/pilot/pilot.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotComponent,
    MenuComponent,
    OptionComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StockModule,
    SvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
