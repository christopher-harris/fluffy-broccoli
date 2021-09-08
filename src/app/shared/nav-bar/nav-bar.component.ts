import { Component, OnInit } from '@angular/core';

interface NavItem {
  url: string,
  label: string,
  icon?: string,
}

@Component({
  selector: 'pm-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  links: NavItem[] = [
    {
      url: 'u-start',
      label: 'Patient Intake',
      // icon: 'bi-input-cursor'
    },
    {
      url: 'pre-checkin',
      label: 'Pre-Checkin',
      // icon: ''
    },
    {
      url: 'forms',
      label: 'Forms',
      // icon: ''
    },
    {
      url: 'checkin',
      label: 'Checkin',
      // icon: ''
    },
    {
      url: 'style-guide',
      label: 'Style Guide',
      // icon: 'bi-droplet-half'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
