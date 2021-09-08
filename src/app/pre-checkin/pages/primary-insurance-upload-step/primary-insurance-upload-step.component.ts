import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-primary-insurance-upload-step',
  templateUrl: './primary-insurance-upload-step.component.html',
  styleUrls: ['./primary-insurance-upload-step.component.scss']
})
export class PrimaryInsuranceUploadStepComponent implements OnInit {
  neededInfo = [
    {
      label: 'Patient',
      info: 'Scrappy Doo'
    },
    {
      label: 'Insurance',
      info: 'Aetna'
    },
    {
      label: 'ID',
      info: '456789'
    },
    {
      label: 'Group',
      info: '147'
    },
    {
      label: 'Group',
      info: '#789'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
