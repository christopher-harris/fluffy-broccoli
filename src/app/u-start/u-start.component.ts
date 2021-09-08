import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pm-u-start',
  templateUrl: './u-start.component.html',
  styleUrls: ['./u-start.component.scss']
})
export class UStartComponent implements OnInit, AfterViewInit {
  pageTitle: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((x) => {
      this.pageTitle = x.pageTitle;
    });
    // this.route.url.subscribe(() => {
    //   this.pageTitle = this.route.snapshot.firstChild?.data.pageTitle;
    // });
  }

  ngAfterViewInit() {
    this.route.data.subscribe(x => console.log(x));
  }

}
