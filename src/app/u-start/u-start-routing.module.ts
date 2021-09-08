import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UStartComponent } from './u-start.component';
import {StartComponent} from './pages/start/start.component';
import {PatientSearchComponent} from './pages/patient-search/patient-search.component';
import {PatientSearchResultsComponent} from './pages/patient-search-results/patient-search-results.component';
import {FormsSelectionComponent} from './pages/forms-selection/forms-selection.component';

const routes: Routes = [
    {
      path: '',
      component: UStartComponent,
      data: {
        pageTitle: 'ABC Clinic'
      },
      children: [
        {
          path: '',
          component: StartComponent,
          data: {
            subTitle: 'ABC Clinic'
          }
        },
        {
          path: 'patient-search',
          component: PatientSearchComponent,
          data: {
            subTitle: 'ABC Clinic'
          }
        },
        {
          path: 'patient-search-results',
          component: PatientSearchResultsComponent,
          data: {
            subTitle: 'ABC Clinic'
          }
        },
        {
          path: 'forms-selection',
          component: FormsSelectionComponent,
          data: {
            subTitle: 'ABC Clinic'
          }
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UStartRoutingModule { }
