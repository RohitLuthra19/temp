/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VehiclesServiceService } from './vehicles-service.service';

describe('VehiclesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiclesServiceService]
    });
  });

  it('should ...', inject([VehiclesServiceService], (service: VehiclesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
