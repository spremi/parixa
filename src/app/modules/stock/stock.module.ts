import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class StockModule {
  constructor(@Optional() @SkipSelf() parentModule: StockModule) {
    if (parentModule) {
      throw new Error(
        'StockModule is already loaded. It must be imported in AppModule only.');
    }
  }
}
