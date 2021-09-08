import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'pm-pre-checkin',
  templateUrl: './pre-checkin.component.html',
  styleUrls: ['./pre-checkin.component.scss']
})
export class PreCheckinComponent implements OnInit {
  routeData$: Observable<any> = this.route.data;
  childRoute$: Observable<any> = this.route.url;
  nextStep: string = '';

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.nextStep = this.route.snapshot.firstChild?.data.nextStepUrl;
        console.log(this.nextStep);
      }
    });
    // this.childRoute$.subscribe((x) => {
    //   console.log(this.route.snapshot.firstChild?.data);
    //   if (this.route.snapshot.firstChild?.data) {
    //     this.nextStep = this.route.snapshot.firstChild.data.nextStepUrl;
    //   }
    // });
  }

  goToNextStep() {
    console.log(this.route.snapshot.firstChild?.data.nextStepUrl);
    if (this.route.snapshot.firstChild?.data.nextStepUrl) {
      this.router.navigate([this.route.snapshot.firstChild?.data.nextStepUrl], {relativeTo: this.route});
    }

  }

}
