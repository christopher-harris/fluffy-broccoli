import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {v4 as uuidv4} from 'uuid';
import {RandomUserService} from '../../../shared/services/random-user.service';
import {Router} from '@angular/router';
import {PatientService} from '../../../shared/services/patient.service';

@Component({
  selector: 'pm-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent implements OnInit {

  communicationOptions = [
    {
      option: 'in-person',
      label: 'Hand tablet to patient'
    },
    {
      option: 'email-text',
      label: 'Send to patient\'s email/text'
    }
  ];

  searchResults: any[] = [];

  showResults: boolean = false;
  selectedPatient: string = '';

  communicationMethod: FormControl = new FormControl();

  constructor(private randomUserService: RandomUserService,
              private router: Router,
              private patientService: PatientService) { }

  ngOnInit(): void {
  }

  getSomeUsers() {
    this.randomUserService.getSomeRandomUsers().subscribe((users) => {
      this.searchResults = users.results.map((user: any) => {
        return {
          ...user as any,
          id: uuidv4(),
          mrnNo: this.getRandomInt(10)
        }
      });
      console.log(this.searchResults);
      this.showResults = !this.showResults;
    });
  }

  selectResult(id: string) {
    this.selectedPatient = id;
  }

  getRandomInt(max: any) {
    return Math.floor(Math.random() * max);
  }

  goToFormsSelection() {
    this.patientService.patientSelected(this.searchResults.find((patient: any) => patient.id === this.selectedPatient));
    this.router.navigateByUrl('u-start/forms-selection');
  }

}
