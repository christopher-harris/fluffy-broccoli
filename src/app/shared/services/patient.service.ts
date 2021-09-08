import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {PatientInfo} from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  selectedPatient: BehaviorSubject<PatientInfo> = new BehaviorSubject<PatientInfo>(this.getLocalPatient());
  selectedPatient$: Observable<PatientInfo> = this.selectedPatient.asObservable();

  constructor() { }

  patientSelected(patient: any) {
    this.selectedPatient.next(patient);
    this.setLocalPatient(patient);
  }

  checkForLocalPatient() {

  }

  setLocalPatient(patient: any) {
    const data = JSON.stringify(patient);
    localStorage.setItem('patient', data);
  }

  getLocalPatient() {
    const localPatientData = JSON.parse(localStorage.getItem('patient') as string);
    return localPatientData as PatientInfo;
  }

  selectLocalPatient() {
    this.selectedPatient.next(this.getLocalPatient());
  }

}
