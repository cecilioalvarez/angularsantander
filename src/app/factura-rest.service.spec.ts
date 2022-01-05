import { TestBed } from '@angular/core/testing';

import { FacturaRESTService } from './factura-rest.service';

describe('FacturaRESTService', () => {
  let service: FacturaRESTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturaRESTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
