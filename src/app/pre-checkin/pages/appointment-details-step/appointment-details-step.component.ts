import { Component, OnInit } from '@angular/core';
import {SampleData} from '../../sample-data';

@Component({
  selector: 'pm-appointment-details-step',
  templateUrl: './appointment-details-step.component.html',
  styleUrls: ['./appointment-details-step.component.scss']
})
export class AppointmentDetailsStepComponent implements OnInit {
  today: Date = new Date();
  public appointmentInfo = SampleData;

  constructor() { }

  ngOnInit(): void {
  }

}
