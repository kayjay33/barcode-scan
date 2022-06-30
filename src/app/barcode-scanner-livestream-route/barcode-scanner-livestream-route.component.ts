import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { QuaggaJSResultObject } from '@ericblade/quagga2';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-barcode-scanner-livestream-route',
  templateUrl: './barcode-scanner-livestream-route.component.html',
  styleUrls: ['./barcode-scanner-livestream-route.component.scss']
})
export class BarcodeScannerLivestreamRouteComponent implements AfterViewInit {

  // constructor() { }

  // constructor() { }

  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;

  barcodeValue!: string;

  ngAfterViewInit(): void {
      this.barcodeScanner.start();
  }

  onValueChanges(result: QuaggaJSResultObject): void {
      console.log(result.codeResult.code)
      // this.barcodeValue = result.codeResult.code;
  }

  onStarted(event: any): void {
      console.log('started', event);
  }

}
