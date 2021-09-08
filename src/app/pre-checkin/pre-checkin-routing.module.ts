import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreCheckinComponent } from './pre-checkin.component';
import {DobStepComponent} from './pages/dob-step/dob-step.component';
import {AppointmentDetailsStepComponent} from './pages/appointment-details-step/appointment-details-step.component';
import {InsuranceStepComponent} from './pages/insurance-step/insurance-step.component';
import {InsuranceVerificationStepComponent} from './pages/insurance-verification-step/insurance-verification-step.component';
import {PrimaryInsuranceUploadStepComponent} from './pages/primary-insurance-upload-step/primary-insurance-upload-step.component';
import {SecondaryInsuranceUploadStepComponent} from './pages/secondary-insurance-upload-step/secondary-insurance-upload-step.component';
import {DriversLicenseUploadStepComponent} from './pages/drivers-license-upload-step/drivers-license-upload-step.component';
import {AddressVerificationStepComponent} from './pages/address-verification-step/address-verification-step.component';
import {PharmacySelectionStepComponent} from './pages/pharmacy-selection-step/pharmacy-selection-step.component';
import {EmergencyContactInfoStepComponent} from './pages/emergency-contact-info-step/emergency-contact-info-step.component';
import {VerifyPcpStepComponent} from './pages/verify-pcp-step/verify-pcp-step.component';
import {PreferredCommunicationsStepComponent} from './pages/preferred-communications-step/preferred-communications-step.component';
import {PaymentStepComponent} from './pages/payment-step/payment-step.component';
import {PaymentReceiptComponent} from './pages/payment-receipt/payment-receipt.component';
import {NewInsuranceFormComponent} from './pages/new-insurance-form/new-insurance-form.component';

const routes: Routes = [
    {
      path: '',
      component: PreCheckinComponent,
      data: {
        location: 'ABC Clinic'
      },
      children: [
        {
          path: '',
          component: DobStepComponent,
          data: {
            nextStepUrl: 'appointment-details'
          }
        },
        {
          path: 'appointment-details',
          component: AppointmentDetailsStepComponent,
          data: {
            nextStepUrl: 'verify-insurance'
          }
        },
        {
          path: 'verify-insurance',
          component: InsuranceStepComponent,
          data: {
            nextStepUrl: 'multi-insurance'
          }
        },
        {
          path: 'multi-insurance',
          component: InsuranceVerificationStepComponent,
          data: {
            nextStepUrl: 'primary-insurance-upload'
          }
        },
        {
          path: 'primary-insurance-upload',
          component: PrimaryInsuranceUploadStepComponent,
          data: {
            nextStepUrl: 'secondary-insurance-upload'
          }
        },
        {
          path: 'secondary-insurance-upload',
          component: SecondaryInsuranceUploadStepComponent,
          data: {
            nextStepUrl: 'drivers-license-upload'
          }
        },
        {
          path: 'drivers-license-upload',
          component: DriversLicenseUploadStepComponent,
          data: {
            nextStepUrl: 'address-verification'
          }
        },
        {
          path: 'address-verification',
          component: AddressVerificationStepComponent,
          data: {
            nextStepUrl: 'pharmacy-selection'
          }
        },
        {
          path: 'pharmacy-selection',
          component: PharmacySelectionStepComponent,
          data: {
            nextStepUrl: 'emergency-contact-info'
          }
        },
        {
          path: 'emergency-contact-info',
          component: EmergencyContactInfoStepComponent,
          data: {
            nextStepUrl: 'verify-pcp'
          }
        },
        {
          path: 'verify-pcp',
          component: VerifyPcpStepComponent,
          data: {
            nextStepUrl: 'preferred-comms'
          }
        },
        {
          path: 'preferred-comms',
          component: PreferredCommunicationsStepComponent,
          data: {
            nextStepUrl: 'payment-info'
          }
        },
        {
          path: 'payment-info',
          component: PaymentStepComponent,
          data: {
            nextStepUrl: 'payment-receipt'
          }
        },
        {
          path: 'payment-receipt',
          component: PaymentReceiptComponent,
          data: {
            nextStepUrl: ''
          }
        },
        {
          path: 'new-insurance',
          component: NewInsuranceFormComponent,
          data: {
            nextStepUrl: ''
          }
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreCheckinRoutingModule { }
