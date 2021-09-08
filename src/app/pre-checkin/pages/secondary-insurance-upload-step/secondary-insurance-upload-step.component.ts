import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-secondary-insurance-upload-step',
  templateUrl: './secondary-insurance-upload-step.component.html',
  styleUrls: ['./secondary-insurance-upload-step.component.scss']
})
export class SecondaryInsuranceUploadStepComponent implements OnInit {
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
