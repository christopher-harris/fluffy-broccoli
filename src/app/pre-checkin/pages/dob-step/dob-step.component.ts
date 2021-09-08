import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pm-dob-step',
  templateUrl: './dob-step.component.html',
  styleUrls: ['./dob-step.component.scss']
})
export class DobStepComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((x) => {
      console.log(x);
    });
  }

}
