import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-forms-nav',
  templateUrl: './forms-nav.component.html',
  styleUrls: ['./forms-nav.component.scss']
})
export class FormsNavComponent implements OnInit {
  links = [
    {
      label: 'Single Question w/ One Answer',
      url: 'single-question-one-answer'
    },
    {
      url: 'single-radio',
      label: 'Single Radio'
    },
    {
      url: 'single-radio-with-subject-header',
      label: 'Single Radio With Subject Header'
    },
    {
      url: 'single-question-multi-answer',
      label: 'Single Question Multiple Answers'
    },
    {
      url: 'text-question-no-requirements',
      label: 'Text Question No Requirements'
    },
    {
      url: 'date-question',
      label: 'Date Question'
    },
    {
      url: 'email-question',
      label: 'Email Question'
    },
    {
      url: 'multi-question-with-similar-answer',
      label: 'Multi Question with Similar Answer Types'
    },
    {
      url: 'numeric-question',
      label: 'Numeric Question'
    },
    {
      url: 'numeric-with-min-max',
      label: 'Numeric Question With Min Max'
    },
    {
      url: 'phone-question',
      label: 'Phone Question'
    },
    {
      url: 'single-radio',
      label: 'Single Radio'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
