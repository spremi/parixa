import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { StockModule } from './modules/stock/stock.module';
import { MenuComponent } from './parts/menu/menu.component';
import { OptionComponent } from './parts/option/option.component';
import { PilotComponent } from './parts/pilot/pilot.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotComponent,
    MenuComponent,
    OptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StockModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
