import { Component, OnInit } from '@angular/core';
import { VehiclesServiceService } from '../vehicles-service.service'

@Component({
  selector: 'app-vehicles-component',
  templateUrl: './vehicles-component.component.html',
  styleUrls: ['./vehicles-component.component.css'],
  providers: [VehiclesServiceService],
})
export class VehiclesComponentComponent implements OnInit {

  tiles = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  public vehicles = [];

  constructor(private vehiclesservice: VehiclesServiceService) { }

  ngOnInit() {
    let details = this.vehiclesservice.getVehicles()
    details.subscribe(data => {
      console.log(data)
      this.vehicles = data.vehicles;
    });
  }

}
