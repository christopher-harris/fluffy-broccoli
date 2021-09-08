import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss']
})
export class StyleGuideComponent implements OnInit {

  styleGuideNavItems = [
    {
      sectionId: 'contents',
      label: 'Contents',
      children: [
        {
          id: 'typography',
          label: 'Typography'
        },
        {
          id: 'images',
          label: 'Images'
        },
        {
          id: 'tables',
          label: 'Tables'
        },
        {
          id: 'figures',
          label: 'Figures'
        }
      ]
    },
    {
      sectionId: 'forms',
      label: 'Forms',
      children: [
        {
          id: 'overview',
          label: 'Overview'
        },
        {
          id: 'disabled-forms',
          label: 'Disabled Forms'
        },
        {
          id: 'sizing',
          label: 'Sizing'
        },
        {
          id: 'input-group',
          label: 'Input group'
        },
        {
          id: 'floating-labels',
          label: 'Floating labels'
        },
        {
          id: 'validation',
          label: 'Validation'
        },
      ]
    },
    {
      sectionId: 'components',
      label: 'Components',
      children: [
        {
          id: 'accordion',
          label: 'Accordion'
        },
        {
          id: 'alerts',
          label: 'Alerts'
        },
        {
          id: 'badge',
          label: 'Badge'
        },
        {
          id: 'breadcrumb',
          label: 'Breadcrumb'
        },
        {
          id: 'buttons',
          label: 'Buttons'
        },
        {
          id: 'button-group',
          label: 'Button group'
        },
        {
          id: 'card',
          label: 'Card'
        },
        {
          id: 'carousel',
          label: 'Carousel'
        },
        {
          id: 'dropdowns',
          label: 'Dropdowns'
        },
        {
          id: 'list-group',
          label: 'List group'
        },
        {
          id: 'modal',
          label: 'Modal'
        },
        {
          id: 'navs',
          label: 'Navs'
        },
        {
          id: 'navbar',
          label: 'Navbar'
        },
        {
          id: 'pagination',
          label: 'Pagination'
        },
        {
          id: 'popovers',
          label: 'Popovers'
        },
        {
          id: 'progress',
          label: 'Progress'
        },
        {
          id: 'scrollspy',
          label: 'Scrollspy'
        },
        {
          id: 'spinners',
          label: 'Spinners'
        },
        {
          id: 'toasts',
          label: 'Toasts'
        },
        {
          id: 'tooltips',
          label: 'Tooltips'
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
