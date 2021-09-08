import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PatientService} from '../../../shared/services/patient.service';
import {Observable} from 'rxjs';
import {PatientInfo} from '../../../shared/models/patient.model';

@Component({
  selector: 'pm-forms-selection',
  templateUrl: './forms-selection.component.html',
  styleUrls: ['./forms-selection.component.scss']
})
export class FormsSelectionComponent implements OnInit {
  patientInfo$: Observable<PatientInfo> = this.patientService.selectedPatient$;

  constructor(private router: Router,
              private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientInfo$.subscribe(x => console.log(x));
    console.log(this.patientService.getLocalPatient());
  }

}
