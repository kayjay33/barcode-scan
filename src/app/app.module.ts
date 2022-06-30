import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeScannerLivestreamRouteComponent } from './barcode-scanner-livestream-route/barcode-scanner-livestream-route.component';

@NgModule({
  declarations: [
    AppComponent,
    BarcodeScannerLivestreamRouteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BarcodeScannerLivestreamModule,
    AppRoutingModule,
    BarcodeScannerLivestreamModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
