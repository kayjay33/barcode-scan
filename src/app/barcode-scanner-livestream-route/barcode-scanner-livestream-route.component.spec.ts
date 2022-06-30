import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeScannerLivestreamRouteComponent } from './barcode-scanner-livestream-route.component';

describe('BarcodeScannerLivestreamRouteComponent', () => {
  let component: BarcodeScannerLivestreamRouteComponent;
  let fixture: ComponentFixture<BarcodeScannerLivestreamRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodeScannerLivestreamRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeScannerLivestreamRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
