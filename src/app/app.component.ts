import { AfterViewInit, Component, ViewChild } from '@angular/core';
// import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = true;
}

// export class AppComponent implements AfterViewInit {
//   @ViewChild(BarcodeScannerLivestreamComponent)
//   barcodeScanner: BarcodeScannerLivestreamComponent;

//   barcodeValue;

//   ngAfterViewInit() {
//     this.barcodeScanner.start();
//   }

//   onValueChanges(result) {
//     this.barcodeValue = result.codeResult.code;
//   }

//   onStarted(started) {
//     console.log(started);
//   }
// }
