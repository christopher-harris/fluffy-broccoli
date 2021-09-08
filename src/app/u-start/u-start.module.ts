import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UStartRoutingModule} from './u-start-routing.module';
import {UStartComponent} from './u-start.component';
import {StartComponent} from './pages/start/start.component';
import {PatientSearchComponent} from './pages/patient-search/patient-search.component';
import {PatientSearchResultsComponent} from './pages/patient-search-results/patient-search-results.component';
import {FormsSelectionComponent} from './pages/forms-selection/forms-selection.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        UStartComponent,
        StartComponent,
        PatientSearchComponent,
        PatientSearchResultsComponent,
        FormsSelectionComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        UStartRoutingModule,
    ]
})
export class UStartModule {
}
