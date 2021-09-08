import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PreCheckinRoutingModule} from './pre-checkin-routing.module';
import {PreCheckinComponent} from './pre-checkin.component';
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
import {SharedModule} from '../shared/shared/shared.module';
import { NewInsuranceFormComponent } from './pages/new-insurance-form/new-insurance-form.component';
import { CompletedConfirmationComponent } from './pages/completed-confirmation/completed-confirmation.component';


@NgModule({
    declarations: [
        PreCheckinComponent,
        DobStepComponent,
        AppointmentDetailsStepComponent,
        InsuranceStepComponent,
        InsuranceVerificationStepComponent,
        PrimaryInsuranceUploadStepComponent,
        SecondaryInsuranceUploadStepComponent,
        DriversLicenseUploadStepComponent,
        AddressVerificationStepComponent,
        PharmacySelectionStepComponent,
        EmergencyContactInfoStepComponent,
        VerifyPcpStepComponent,
        PreferredCommunicationsStepComponent,
        PaymentStepComponent,
        PaymentReceiptComponent,
        NewInsuranceFormComponent,
        CompletedConfirmationComponent
    ],
    imports: [
        CommonModule,
        PreCheckinRoutingModule,
        SharedModule
    ]
})
export class PreCheckinModule {
}
